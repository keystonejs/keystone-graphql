const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLObjectType({
	name: 'KeystoneName',
	fields: {
		first: {
			type: GraphQL.GraphQLString,
		},
		last: {
			type: GraphQL.GraphQLString,
		},
		full: {
			type: GraphQL.GraphQLString,
		},
	},
});
