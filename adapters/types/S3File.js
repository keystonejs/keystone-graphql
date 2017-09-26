'use strict';

const GraphQL = require('graphql');

const S3FileType = new GraphQL.GraphQLObjectType({
	name: 'KeystoneS3FileType',
	fields: {
		filename: { type: GraphQL.GraphQLString },
		originalname: { type: GraphQL.GraphQLString },
		path: { type: GraphQL.GraphQLString },
		size: { type: GraphQL.GraphQLInt },
		filetype: { type: GraphQL.GraphQLString },
		url: { type: GraphQL.GraphQLString }
	}
});

module.exports = (field) => S3FileType;
