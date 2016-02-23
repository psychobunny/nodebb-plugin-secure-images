"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
		return callback(null, data);
	}

	data.postData.content = data.postData.content
		.replace(/!\[([\S\s]*?)\]\(http:\/\/(\S*?)\)/, '![$1](https://$2)');

	callback(null, data);
};

module.exports = plugin;