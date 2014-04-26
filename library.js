"use strict";

var plugin = {};

plugin.parse = function(postContent, callback) {
	postContent = postContent
		.replace(/!\[([\S\s]*?)\]\(http:\/\/(\S*?)\)/, '![$1](https://$2)');

	callback(null, postContent);
};

module.exports = plugin;