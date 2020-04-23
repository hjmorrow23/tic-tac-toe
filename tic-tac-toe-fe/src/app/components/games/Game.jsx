import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onGetPlayers } from "~/app/ducks/players/selectors";
import { getPlayerList } from "~/app/ducks/players/actions";
import { updatePlayer } from "~/app/ducks/player/actions";

const Game = ({currentPlayers, setGameActive, postGame, mapPlayerToId}) => {
    const savedPlayers = useSelector(onGetPlayers);
    const newPlayer = {
        name: "",
        wins: 0,
        losses: 0,
        ties: 0
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayerList());
    }, []);

    const [displayHeader, _setDisplayHeader] = useState('');
    

    const displayHeaderRef = useRef(displayHeader);

    const setDisplayHeader = data => {
        displayHeaderRef.current = data;
        _setDisplayHeader(data);
    };

    const [currentGame, _setCurrentGame] = useState({
        movingPlayer: {},
        moves: 0,
        status: 'pregame',
        winner: {}
    });

    const currentGameRef = useRef(currentGame);

    const setCurrentGame = data => {
        currentGameRef.current = data;
        _setCurrentGame(data);
    };

    const [playerX, setPlayerX] = useState({
        ...currentPlayers[0],
        type: "X",
        moves: 0
    });
    const [playerO, setPlayerO] = useState({
        ...currentPlayers[1],
        type: "O",
        moves: 0
    });

    const clearBoard = () => {
        const boardNodes = [].slice.call(document.querySelectorAll('.game-board__space'));
        boardNodes.map(space => {
            space.innerText = "";
        });
    };

    const startGame = () => {
        clearBoard();
        setDisplayHeader(`Player X's turn`);
        setCurrentGame({
            ...currentGame,
            movingPlayer: playerX,
            moves: 0,
            status: 'pending'
        });
    };

    const makeMove = (e, player) => {
        console.log(player)
        if(e.target.innerText === "") {
            e.target.innerText = player ? player.type : '';
        }
    };

    const displayWinner = (winner) => {
        setDisplayHeader(`Player ${winner.type} wins!`)
        console.log(winner)
    };
    
    const handleTurn = (e) => {
        if (currentGameRef.current.status === 'pregame') {
            return
        } else if (currentGame.status === 'pending') {
            
            //Make move
            if(e.target.innerText === "") {
                e.target.innerText = currentGameRef.current.movingPlayer ? currentGameRef.current.movingPlayer.type : '';
            } else {
                return
            }
            
            if(checkForWin()) {
                setCurrentGame({
                    ...currentGameRef.current,
                    status: 'complete',
                    winner: currentGameRef.current.movingPlayer
                });
                
                displayWinner(currentGameRef.current.movingPlayer);
            } else if(!checkForWin() && !logGameBoard().includes("")) {
                setDisplayHeader("It's a tie!!");
                setCurrentGame({
                    ...currentGameRef.current,
                    status: 'complete',
                    winner: null
                });
            } else {
                setCurrentGame({
                    ...currentGameRef.current,
                    moves: currentGameRef.current.moves + 1,
                    movingPlayer: currentGameRef.current.movingPlayer.type === 'X' ? playerO : playerX,
                });
    
                setDisplayHeader(`Player ${currentGameRef.current.movingPlayer.type}'s turn`);
            }

            
            
        }

    }

    const logGameBoard = () => {
        //Grab all board spaces and form array
        let board = [];
        const boardNodes = [].slice.call(document.querySelectorAll('.game-board__space'));
        boardNodes.map(square => {
            board.push(square.innerText)
        });

        return board
    }

    const checkForWin = () => {
        const board = logGameBoard();
        
        return ((board[0] === board[1]) && (board[1] === board[2]) && (board[2] != "")) || 
        ((board[3] === board[4]) && (board[4] === board[5]) && (board[5] != "")) || 
        ((board[6] === board[7]) && (board[7] === board[8]) && (board[8] != "")) || 
        ((board[0] === board[3]) && (board[3] === board[6]) && (board[6] != "")) || 
        ((board[1] === board[4]) && (board[4] === board[7]) && (board[7] != "")) || 
        ((board[2] === board[5]) && (board[5] === board[8]) && (board[8] != "")) || 
        ((board[0] === board[4]) && (board[4] === board[8]) && (board[8] != "")) || 
        ((board[2] === board[4]) && (board[4] === board[6]) && (board[6] != ""));
    }

    const changePlayerRecord = () => {
        if(currentGameRef.current.winner === null) {
            //Map over tied players and update their tied record
            let tiedPlayers = currentPlayers;
            tiedPlayers.map(player => {
                const playerResult = {
                    id: mapPlayerToId(player),
                    ties: player.ties + 1
                }
                dispatch(updatePlayer([playerResult.id, playerResult.ties]))
            });
        } else {
            console.log(savedPlayers)
            //Identify who won and lost
            let winner = currentGameRef.current.winner;
            let loser = currentPlayers.filter(player => player.name !== winner.name)[0];

            //Match object to schema
            delete winner.type;
            delete winner.moves;

            winner = {
                ...winner,
                id: mapPlayerToId(winner),
                wins: winner.wins + 1
            }; 

            loser = {
                ...loser,
                id: mapPlayerToId(loser),
                losses: loser.losses + 1
            };

            console.log(winner, loser);

            //Update player in database
            dispatch(updatePlayer([winner.id, winner]));
            dispatch(updatePlayer([loser.id, loser]));
        }
        
    };

    const saveGame = () => {
        //Build message to post game record
        const submittedGame = {
            winner: currentGameRef.current.winner === null ? null : mapPlayerToId(currentGameRef.current.winner),
            number_of_moves: currentGameRef.current.moves
        };

        console.log(submittedGame)

        changePlayerRecord();
        // postGame(submittedGame);
    };

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <button onClick={startGame}>{currentGameRef.current.status === "complete" ? "Rematch" : "Start Game"}</button>
            <button onClick={() => setGameActive(false)}>Back to Dashboard</button>
            {currentGameRef.current.status === "complete" ? (
                <button onClick={() => saveGame()}>Save Game</button>
            ) : null}
            
            <h1>{displayHeaderRef.current}</h1>
            <div className="game-board">
                <div className="row">
                    <div className="game-board__space col-sm" id="space-1" data-space="1" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-2" data-space="2" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-3" data-space="3" onClick={(e) => handleTurn(e)}></div>
                </div>
                <div className="row">
                    <div className="game-board__space col-sm" id="space-4" data-space="4" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-5" data-space="5" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-6" data-space="6" onClick={(e) => handleTurn(e)}></div>
                </div>
                <div className="row">
                    <div className="game-board__space col-sm" id="space-7" data-space="7" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-8" data-space="8" onClick={(e) => handleTurn(e)}></div>
                    <div className="game-board__space col-sm" id="space-9" data-space="9" onClick={(e) => handleTurn(e)}></div>
                </div> 
            </div>  
        </div>
    );
};

export default Game;