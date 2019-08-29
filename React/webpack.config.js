const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry:'./app.js',
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }

                },
                
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./test.html'
        }),
        new CleanWebpackPlugin()
    ]
}