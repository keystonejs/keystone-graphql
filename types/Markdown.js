'use strict';

const GraphQL = require('graphql');

const MarkdownFieldType = new GraphQL.GraphQLObjectType({
	name: 'KeystoneMarkdown',
	fields: {
		md: {
			type: GraphQL.GraphQLString,
			description: 'source markdown text',
		},
		html: {
			type: GraphQL.GraphQLString,
			description: 'generated html code',
		},
	},
});

module.exports = (field) => MarkdownFieldType;
