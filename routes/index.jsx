const router = require('express').Router();
import React from 'react';
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
import { renderToString } from 'react-dom/server';
// const ReactRouter = require('react-router');
import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
// const Provider = require('react-redux').Provider;
import store from '../configureStore';

router.get('*', function(request, response) {
    match(
        {
            routes: require('./routes.jsx'),
            location: request.url
        },
        function(error, redirectLocation, renderProps) {
            console.log('renderProps', renderProps)
            if (renderProps) {
                const html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );
                response.send(html);
            } else {
                response.status(404).send('Not Found');
            }
        }
    );
});

module.exports = router;
