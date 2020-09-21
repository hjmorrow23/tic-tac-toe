import React, {useState, useEffect, useRef} from 'react';

const Dashboard = ({startNewGame, savedPlayers, savedGames, mapPlayerToId}) => {
    const [playerModal, _setPlayerModal] = useState(false);

    const currentModalRef = useRef(playerModal);

    const setPlayerModal = data => {
        currentModalRef.current = data;
        _setPlayerModal(data);
    };

    const addFormPlayers = () => {
        const playerX = document.getElementById('player-x').value;
        const playerO = document.getElementById('player-o').value;
        const players = [{
            name: playerX,
            wins: 0,
            losses: 0,
            ties: 0
        }, {
            name: playerO,
            wins: 0,
            losses: 0,
            ties: 0
        }]


        startNewGame(players);
        setPlayerModal(false);
    };

    const mostWins = () => {
        return savedPlayers.sort((a, b) => b.wins - a.wins).slice(0, 3)
    };
    const fewestLosses = () => {
        return savedPlayers.sort((a, b) => a.losses - b.losses).slice(0, 3)
    };
    const fewestMoves = () => {
        return savedGames.sort((a, b) => a.number_of_moves - b.number_of_moves).slice(0, 3)
    };
    const getPlayerFromWinner = (id) => {
        return savedPlayers.find(player => player.id === id)
    };

    return (
        <div className="leaderboard-container">
            <h1>Tic Tac Toe</h1>
            {currentModalRef.current ? (
                    <div className="set-name-modal">
                        <span className="close-modal" onClick={() => {setPlayerModal(false)}}>X</span>
                        <h2>Set Players</h2>
                        <form className="player-form" method="post" onSubmit={() => addFormPlayers()}>
                            <label className="player-label" htmlFor="player-x">Player X</label>
                            <input type="text" id="player-x" name="player-x" className="player-input" />
                            <label className="player-label" htmlFor="player-o">Player O</label>
                            <input type="text" id="player-o" name="player-o" className="player-input" />
                            <input type="submit" value="Let's Go!" className="submit-button button" />
                        </form>
                    </div>
                ) : null
            }
            <div className="dashboard">
                <button className="start-button button" onClick={() => {setPlayerModal(true)}}>New Game</button>
                <h2 className="leaderboard-title">LeaderBoard</h2>
                <div className="leaderboard">
                    <div className="leaderboard-panel">
                        <h3 className="leaderboard-panel-title">Most Wins</h3>
                        <ul className="leaderboard-panel-list">
                            {mostWins() && mostWins().map(player => (<li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">{player.name}</div>
                                <div className="leaderboard-panel-list-item-value">{player.wins}</div>
                            </li>)) }
                        </ul>
                    </div>
                    <div className="leaderboard-panel">
                        <h3 className="leaderboard-panel-title">Fewest Losses</h3>
                        <ul className="leaderboard-panel-list">
                            {fewestLosses() && fewestLosses().map(player => (<li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">{player.name}</div>
                                <div className="leaderboard-panel-list-item-value">{player.losses}</div>
                            </li>)) }
                        </ul>
                    </div>
                    <div className="leaderboard-panel">
                        <h3 className="leaderboard-panel-title">Fewest Moves</h3>
                        <ul className="leaderboard-panel-list">
                            {fewestMoves() && fewestMoves().map(game => (<li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">{getPlayerFromWinner(game.winner).name}</div>
                                <div className="leaderboard-panel-list-item-value">{game.number_of_moves}</div>
                            </li>)) }
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Dashboard;