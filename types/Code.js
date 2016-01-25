'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		size: {
			type: GraphQL.GraphQLString,
			defaultValue: 'full',
			description: 'The size of the text area',
		},
		height: {
			type: GraphQL.GraphQLInt,
			defaultValue: 180,
			description: 'The height of the text area',
		},
		lang: {
			type: GraphQL.GraphQLString,
			description: 'The config property',
		},
	},
	resolve: (source, args) => source.get(field.path),
});
