const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:'./app.js',
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-react',//jsx转义
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties'//箭头函数作为类函数
                        ]
                    }

                },
                
            }
        ]

    },
    plugins:[
        //将入口文件生成的js自动引入到html文件中
        new HtmlWebpackPlugin({
            template:'./test.html'
        }),
        //每次编译时 清空dist目录
        new CleanWebpackPlugin(),
        //配置react到全局
        new webpack.ProvidePlugin({React:'react'})
    ],
    resolve:{
        //目录结构定义
        alias:{

        }
    }
}