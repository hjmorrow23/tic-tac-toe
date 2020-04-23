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

    return (
        <div className="game-container">
            <h1>Tic Tac Toe</h1>
            <div className="dashboard">
                <button className="start-button button" onClick={() => {setPlayerModal(true)}}>New Game</button>
                <div className="leaderboad">
                    <h2 className="leaderboard-title">LeaderBoard</h2>
                    <div className="leaderboard-panel">
                        <h3 className="leaderboard-panel-title">Most Wins</h3>
                        <ul className="leaderboard-panel-list">
                            <li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">Henry</div>
                                <div className="leaderboard-panel-list-item-value">3</div>
                            </li>
                            <li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">Alyssa</div>
                                <div className="leaderboard-panel-list-item-value">2</div>
                            </li>
                        </ul>
                    </div>
                    <div className="leaderboard-panel">
                        <h3 className="leaderboard-panel-title">Fewest Moves</h3>
                        <ul className="leaderboard-panel-list">
                            <li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">Henry</div>
                                <div className="leaderboard-panel-list-item-value">3</div>
                            </li>
                            <li className="leaderboard-panel-list-item">
                                <div className="leaderboard-panel-list-item-name">Alyssa</div>
                                <div className="leaderboard-panel-list-item-value">2</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
            
        </div>
    );
};

export default Dashboard;