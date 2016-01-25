'use strict';

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		workFactor: {
			type: GraphQL.GraphQLInt,
			defaultValue: 10,
			description: 'The bcrypt workfactor to use when generating the hash',
		},
	},
	resolve: (source, args) => source.get(field.path),
});
