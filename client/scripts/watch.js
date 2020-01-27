process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const path = require('path');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config.js')('development');

config.entry = config.entry.filter(fileName => !fileName.match(/webpackHotDevClient/));
config.plugins = config.plugins.filter(plugin => !(plugin instanceof webpack.HotModuleReplacementPlugin));
config.output.path = path.resolve(__dirname, '..', 'build');

webpack(config).watch({}, (err, stats) => {
	if (err) {
		console.error(err);
	} else {
		copyPublicFolder();
	}
	console.error(stats.toString({
		chunks: false,
		colors: true
	}));
});

function copyPublicFolder() {
	fs.copySync(paths.appPublic, paths.appBuild, {
		dereference: true,
		filter: file => file !== paths.appHtml
	});
}
