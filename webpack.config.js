const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './main.tsx',
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
