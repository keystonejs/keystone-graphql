'use strict'

var GraphQL = require('graphql');

var KeystoneCodeType = new GraphQL.GraphQLObjectType({
	name: 'KeystoneCode',
	fields: {
		code: {
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
		},
	},
});

module.exports = (field) => KeystoneCodeType;
