// webpack.config.js
module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './js/bundle.js'    
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                // query: {
                //     presets: ['es2015']
                // }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js']
    },
    watchOptions: {
        poll: true
    }
};