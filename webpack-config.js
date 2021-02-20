const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
        compress: true,
        host: '0.0.0.0',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx|js)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash:base64].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'src/assets/icons'),
                ],
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    plugins: [
        new UnusedFilesWebpackPlugin({
            ignore: [
                'node_modules/**/*',
                'package-lock.json',
                'package.json',
                'README.md',
                'tsconfig.json',
                'webpack.config.js'
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ],
};
