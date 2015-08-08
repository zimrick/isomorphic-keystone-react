module.exports = {
	entry: './client.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'client.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	}
};
