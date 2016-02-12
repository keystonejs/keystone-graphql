'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLBoolean,
	resolve: (source) => source.get(field.path),
});
