const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
	entry: './index.tsx',
	context: src,
	output: {
		path: dist,
		filename: 'bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']  // порядок имеет значение!
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'], // позволяет не указывать расширения при импорте
		// alias: {
		// 	Utilities: path.resolve(__dirname, 'src/utilities/'),
		// 	Templates: path.resolve(__dirname, 'src/templates/'),
		//   }, ----  позволит вместо 'import Utility from '../../utilities/utility';'
		//            использовать 'import Utility from 'Utilities / utility';'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html', // шаблон
			filename: 'index.html', // название выходного файла
		}),
	],
	mode: 'production'
}
