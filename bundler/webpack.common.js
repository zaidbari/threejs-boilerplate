const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, '../src/js/index.js'),
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: path.resolve(__dirname, '../static') },
		]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			minify: true
		})
	],
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [ {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/images/'
					}
				} ]
			},
			{
				test: /\.fbx$/,
				use: [ 'raw-loader' ]

			},
			{
				test: /\.(glsl|vs|fs|vert|frag)$/,
				exclude: /node_modules/,
				use: [
					'raw-loader',
					'glslify-loader'
				]
			}
		]
	}
}