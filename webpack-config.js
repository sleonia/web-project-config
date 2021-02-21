const path = require('path')

const cwd = process.cwd();

module.exports = {
    mode: 'production',
    entry: 'src/index.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [cwd, 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx|js)$/,
                loader: 'babel-loader',
                options:  {
                    babelrc: false,
                    cacheDirectory: true
                }
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'src/assets/icons'),
                ],
                use: ['@svgr/webpack', 'url-loader'],
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
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localsConvention: 'camelCase'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            }
        ]
    },

    context: cwd,

    output: {
        path: path.resolve(cwd, 'dist'),
        filename: 'index.js'
    },
};
