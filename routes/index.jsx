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
    console.log(13, request.url)
    match(
        {
            routes: require('./routes.jsx'),
            location: request.url
        },
        function(error, redirectLocation, renderProps) {
            if (error) { 
                response.status(500).send(error.message) 
            } else if (redirectLocation) { 
                response.redirect(302, redirectLocation.pathname + redirectLocation.search) 
            } else if (renderProps) {
                const html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );
                response.status(200)
                .send(html) 
            } else { 
                response.status(404).send('Not found') 
            }
        }
    );
});

module.exports = router;
