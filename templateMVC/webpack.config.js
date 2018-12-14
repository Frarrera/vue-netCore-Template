var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var appBasePath = './resources/assets/';

var jsEntries = {};
// We search for app.js files inside basePath folder and make those as entries
fs.readdirSync(appBasePath).forEach(function (name) {
    console.log(name);
    var indexFile = appBasePath + name + '/app.js';
    if (fs.existsSync(indexFile)) {
        jsEntries[name] = indexFile;
    }
});

console.log(jsEntries);
var dev = {
    mainJS: './resources/assets/js/app.js'
    //mainCSS: './resources/assets/css/app.css'
};
module.exports = {
	mode : 'development',
    entry: dev,
    output: {
        path: path.resolve(__dirname, './wwwroot/js/'),
        publicPath: '/wwwroot/js/',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, appBasePath)
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
			{
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:2220',
                changeOrigin: true
            }
        }
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]);
}