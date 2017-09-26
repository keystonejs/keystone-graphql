'use strict';

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		format: {
			type: GraphQL.GraphQLString,
			description: 'A formated datetime using Numeral.js tokens ' +
				'http://numeraljs.com/',
		},
	},
	resolve: (source, args) => {
		if (args.format) {
			return field.format(source, args.format);
		}
		return source.get(field.path);
	},
});
