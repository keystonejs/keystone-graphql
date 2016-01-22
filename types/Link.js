'use strict'

var GraphQL = require('graphql');

var KeystoneLinkType = new GraphQL.GraphQLObjectType({
	name: 'Keystone Link',
	fields: {
		raw: {
			type: GraphQL.GraphQLString,
			description: 'The raw unformatted URL',
		},
		format: {
			type: GraphQL.GraphQLString,
			description: 'The URL after being passed through the `format Function` option',
		},
	},
});

module.exports = (field) => KeystoneLinkType;
