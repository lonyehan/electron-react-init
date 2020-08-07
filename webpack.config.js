const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [                              // order is important(execute order : style-loader(css-loader(postcss-loader(somefile.css))))
                "style-loader",                 // Inject CSS into the DOM
                "css-loader",                   // load css file
                "postcss-loader",               // add browser vendor prefix to css (use autoprefixer)
            ]
          }]

    }
};