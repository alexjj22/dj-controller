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
import {
    uploadPath,
    djControllerPath
} from './constants';

const Routes = () => (
    <Switch>
        <Route path={ uploadPath } component={ Uploader } />
        <Route path={ djControllerPath } component={ DjController } />
        <Redirect to="/upload" />
    </Switch>
);

export default Routes;
