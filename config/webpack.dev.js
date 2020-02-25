console.log('\n        command - webpack --dev\n');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const {
  entry, pathToHtml, contentBase, resolve,
} = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry,
  output: {
    pathinfo: true,
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },
  devServer: {
    contentBase,
    publicPath: '/',
    proxy: {
      '/api': '',
    },
    port: 3000,
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    quiet: false,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  resolve,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            highlightCode: true,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[path]--[name]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
                require('autoprefixer')({ // eslint-disable-line global-require
                  browsers: ['"last 2 versions", "not ie 11", "safari >= 10", "last 3 Edge versions", "not op_mini all", "not dead"'],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: [/\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: 'images/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: pathToHtml,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new OptimizeCssAssetsPlugin(),
    new ManifestPlugin(),
  ],
};
