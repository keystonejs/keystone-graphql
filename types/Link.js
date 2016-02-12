'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	resolve: (source) => source.get(field.path),
})
