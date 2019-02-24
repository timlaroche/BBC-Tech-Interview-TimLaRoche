path = require('path');

module.exports = {
	entry: './dist/app.js',
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader'
			}
			]
		},
		{
			test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [{
				loader: 'file-loader'
			}]
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader'
			}]
		}
		]
	}
}
