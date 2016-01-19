'use strict'

const GraphQL = require('graphql');

const KeystoneEmailType = new GraphQL.GraphQLObjectType({
	name: 'KeystoneEmail',
	fields: {
		email: { type: GraphQL.GraphQLString },
		gravatarUrl: {
			type: GraphQL.GraphQLString,
			args: {
				size: {
					type: GraphQL.GraphQLInt,
					defaultValue: 80,
					description: 'Size of images ranging from 1 to 2048 pixels, square',
				},
				defaultImage: {
					type: GraphQL.GraphQLString,
					defaultValue: 'identicon',
					description: 'Default image url encoded href or one of the built in options: 404, mm, identicon, monsterid, wavatar, retro, blank',
				},
				rating: {
					type: GraphQL.GraphQLString,
					defaultValue: 'g',
					description: 'The rating of the image, either: g, pg, r or x',
				},
			},
			description: 'Protocol-less Gravatar image request URL',
			resolve: (source, args) =>
				source.gravatarUrl(args.size, args.defaultImage, args.rating),
		},
	},
});

module.exports = (field) => KeystoneEmailType;
