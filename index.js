'use strict';

const GraphQL = require('graphql');

const KeystoneNameType = new GraphQL.GraphQLObjectType({
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

module.exports.name = (field) => KeystoneNameType;

const CloudinaryImageType = new GraphQL.GraphQLObjectType({
	name: 'KeystoneCloudinaryImage',
	fields: {
		public_id: {
			type: GraphQL.GraphQLString,
		},
		version: {
			type: GraphQL.GraphQLInt,
		},
		signature: {
			type: GraphQL.GraphQLString,
		},
		format: {
			type: GraphQL.GraphQLString,
		},
		resource_type: {
			type: GraphQL.GraphQLString,
		},
		url: {
			type: GraphQL.GraphQLString,
		},
		width: {
			type: GraphQL.GraphQLInt,
		},
		height: {
			type: GraphQL.GraphQLInt,
		},
		secure_url: {
			type: GraphQL.GraphQLString,
		},
	},
});

module.exports.cloudinaryImage = (field) => CloudinaryImageType;

module.exports.datetime = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		format: {
			type: GraphQL.GraphQLString,
			description: 'A formated datetime using Moment.js tokens ' +
				'http://momentjs.com/docs/#/displaying/format/',
		},
	},
	resolve: (source, args) => {
		if (args.format) {
			return field.format(source, args.format);
		}
		return source.get(field.path);
	},
});

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

module.exports.markdown = (field) => MarkdownFieldType;
