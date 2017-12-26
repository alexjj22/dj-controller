/**
 * Created by Александр on 24.12.2017.
 */
import React        from 'react';
import DjController from './Containers/DjController/index';
import Uploader     from './Containers/Uploader/index';

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/upload" component={ Uploader } exact />
        <Route path="/dj-controller" component={ DjController } exact />
        <Redirect to="/upload" />
    </Switch>
);

export default Routes;
