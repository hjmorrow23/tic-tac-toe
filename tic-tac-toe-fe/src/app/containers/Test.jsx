import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGamesList } from "~/app/ducks/games/actions";
import { getGames } from "~/app/ducks/games/selectors";
import Api from '~/app/api/index'

const Test = () => {
    const games = useSelector(getGames)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesList());
    }, []);

    games ? console.log(games) : console.log('not yet');

    return (
        <div>
            {games ? (
                <div>
                    <h1>Winnah</h1>
                    <p>{games ? games[0].winner : null}</p>
                    <p></p>
                    <button>New Game</button>
                    <div className="game-board">
                        <div className="row">
                            <div className="game-board__space col-sm" id="space-1"><a href="/test" className="space-button"></a></div>
                            <div className="game-board__space col-sm" id="space-2"></div>
                            <div className="game-board__space col-sm" id="space-3"></div>
                        </div>
                        <div className="row">
                            <div className="game-board__space col-sm" id="space-4"></div>
                            <div className="game-board__space col-sm" id="space-5"></div>
                            <div className="game-board__space col-sm" id="space-6"></div>
                        </div>
                        <div className="row">
                            <div className="game-board__space col-sm" id="space-7"></div>
                            <div className="game-board__space col-sm" id="space-8"></div>
                            <div className="game-board__space col-sm" id="space-9"></div>
                        </div> 
                    </div>  
                </div>
            ) : (
                <div>Loading</div>
            )}
            
        </div>
    )
}

export default Test;