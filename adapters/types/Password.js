'use strict';

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		character: {
			type: GraphQL.GraphQLString,
			defaultValue: '•',
			description: 'The character to use to represent a set password value',
		},
	},
	resolve: (source, args) => {
		if (!source.get(field.path)) return '';
		var len = Math.round(Math.random() * 4) + 6;
		var chrs = '';
		for (var i = 0; i < len; i++) chrs += args.character;
		return chrs;
	}
});
