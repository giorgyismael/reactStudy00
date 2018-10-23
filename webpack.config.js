const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//este plugin serve para carregar o .css para a pasta public ao realizaro o tranpile do código
module.exports ={
    entry: __dirname + '/ex/index.js',
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
                //query => Aqui informo o que o loader que está sendo criado deve interpretar: React, TypeScript, ES6, etc..
                presets:['es2015', 'react'],
                //Utilizado para que seja apossível utilizar o operador spread (...)
                plugins:['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        }]
    },
    plugins:[
         new ExtractTextPlugin("bundle.css")
    ]
}