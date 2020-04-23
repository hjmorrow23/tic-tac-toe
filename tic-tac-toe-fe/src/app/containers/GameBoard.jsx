import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGamesList, getGame, addGame } from "~/app/ducks/games/actions";
import { onGetGames, onGetGame } from "~/app/ducks/games/selectors";
import { getPlayerList } from "~/app/ducks/players/actions";
import { getPlayer, addPlayer } from "~/app/ducks/player/actions";
import { onGetPlayers } from "~/app/ducks/players/selectors";
import { onGetPlayer } from "~/app/ducks/player/selectors";
import Game from "~/app/components/games/Game";
import Dashboard from "~/app/components/games/Dashboard";

const GameBoard = () => {
    const savedGames = useSelector(onGetGames);
    // const game = useSelector(onGetGame);
    const savedPlayers = useSelector(onGetPlayers);
    // const player = useSelector(onGetPlayer);

    const [gameActive, setGameActive] = useState(false);

    const [currentPlayers, _setCurrentPlayers] = useState([]);

    const currentPlayersRef = useRef(currentPlayers);

    const setCurrentPlayers = data => {
        currentPlayersRef.current = data;
        _setCurrentPlayers(data);
    };

    const startNewGame = (players) => {
        setCurrentPlayers(players);
        addNewPlayers();
        setGameActive(true);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesList());
        // dispatch(getGame(playerId));
        dispatch(getPlayerList());
        // dispatch(getPlayer(playerId))
    }, []);

    const mapPlayerToId = (updatedPlayer) => {
        //Check player against database players
        let playerId;
        savedPlayers.map((player) => {
            if(player.name.toLowerCase() === updatedPlayer.name.toLowerCase()) {
                playerId = player.id;
            } 
        });

        return playerId;
    }

    const postGame = game => {
        dispatch(addGame(game));
    };

    const postPlayer = player => {
        dispatch(addPlayer(player));
    };

    const addNewPlayers = () => {
        //Check to see if players exists in database
        const savedPlayerNames = Array.from(savedPlayers, savedPlayer => savedPlayer.name.toLowerCase());
        const currentPlayerNames = Array.from(currentPlayersRef.current, currentPlayer => currentPlayer.name.toLowerCase());
        const newPlayerNames = currentPlayerNames.filter(name => !savedPlayerNames.includes(name));
        
        //Add player if they don't exist in database
        currentPlayersRef.current.map(player => {
            if(newPlayerNames.includes(player.name.toLowerCase())) {
                // postPlayer(player);
            };
        });
    };

    

    return (
        <div>
            {savedPlayers && savedGames && !gameActive ? (
                <Dashboard startNewGame={startNewGame} gameActive={gameActive} savedGames={savedGames} savedPlayers={savedPlayers} mapPlayerToId={mapPlayerToId}></Dashboard>
            ) : gameActive ? (
                <Game setGameActive={setGameActive} currentPlayers={currentPlayers} postGame={postGame} mapPlayerToId={mapPlayerToId}></Game>
            ) : (
                <div>Loading...</div>
            )}
            
        </div>
    )
}

export default GameBoard;