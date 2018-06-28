const path = require('path');

const config = {
    //input
    context: __dirname + '',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },

    //transformations
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    mode: 'development',

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        compress: true,
        port: 9000
    }
};

module.exports = config;
