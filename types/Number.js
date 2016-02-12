'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLInt,
	resolve: (source) => source.get(field.path),
})
