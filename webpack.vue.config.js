const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/vue/index.js',
    output: {
        path: __dirname,
        filename: './dist/index.js', 
        libraryTarget: "umd"                              
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',

                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',
                    'css-loader',

                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },


            {
                test: /\.js$/,
                use: 'babel-loader',
                include: /src/,
                exclude: /node_modules/,
            },
        ]
    },

}





// 需要用到以下loader
// "vue-loader": "^15.7.0",
// "vue-style-loader": "^4.1.2"
// "vue-template-compiler": "^2.6.10",