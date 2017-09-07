var ReactDOM = require('react-dom');
var React = require('react');
var routes = require('./routes/routes.jsx');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
import store from './configureStore';

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
