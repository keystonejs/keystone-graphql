'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLList(GraphQL.GraphQLString),
	description: 'An array [longitude, latitude]',
	resolve: (source) => source.get(field.path),
});
