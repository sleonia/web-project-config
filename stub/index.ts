const path = require('path');

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('../webpack-config');

express()
    //@ts-ignore
    .use(webpackDevMiddleware(webpack(webpackConfig)))
    //@ts-ignore
    .use('/app', (req, res) => {
        //@ts-ignore
        res.sendFile(path.resolve(__dirname, 'index.html'));
    })
    //@ts-ignore
    .listen(3030, () => 'Dev server started');
