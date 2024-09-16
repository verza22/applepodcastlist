var path = require('path');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};