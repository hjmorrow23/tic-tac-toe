import React from 'react';
import { Switch, Route } from 'react-router';
import Test from '../containers/Test';

const ScannerRoutes = () => {
    return (
        <Switch>
            <Route path="/game" component={Test} />
        </Switch>
    )
}

export default ScannerRoutes;