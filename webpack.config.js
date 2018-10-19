const webpack = require('webpack')
module.exports ={
    entry: './ex/index.js',
    output:{
        path: __dirname + '/public',
        filename: '/bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase:'./public'
    },
    module: {
        // Loaders é responsavel por definir que programa vai carregar um determinado arquivo,
        // bem como definir o programa respinsavel pelo tranpile.
        loaders:[{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                //Devo informar o que o loader que está sendo criado deve interpretar: React, TypeScript, ES6, etc..
                presets:['es2015', 'react'],
                //Utilizado para que seja apossível utilizar o operador spread (...)
                plugins:['transform-object-rest-spread']
            }
        }]
    }
}