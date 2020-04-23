import React from 'react';
import { Switch, Route } from 'react-router';
import GameBoard from '../containers/GameBoard';

const ScannerRoutes = () => {
    return (
        <Switch>
            <Route path="/game" component={GameBoard} />
        </Switch>
    )
}

export default ScannerRoutes;