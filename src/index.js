import React                 from 'react';
import ReactDOM              from 'react-dom';
import { Provider }          from 'react-redux';
import ConnectedRouter       from 'react-router-redux/ConnectedRouter'
import createBrowserHistory  from 'history/createBrowserHistory'
import App                   from './Containers/App/index';
import store                 from './store/index'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();