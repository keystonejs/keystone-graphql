const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLObjectType({
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
