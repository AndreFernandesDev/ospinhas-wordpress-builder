const defaultConfig = require("@wordpress/scripts/config/webpack.config");
module.exports = {
	...defaultConfig,
	entry: {
		call: "./includes/block-editor/blocks/call",
		container: "./includes/block-editor/blocks/container",
		selector: "./includes/block-editor/blocks/selector",
	},
};
