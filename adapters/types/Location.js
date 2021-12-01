'use strict'

var GraphQL = require('graphql');

var KeystoneLocationType = new GraphQL.GraphQObjectType({
	name: 'Keystone Location',
	fields: {
		name: {
			type: GraphQL.GraphQLString,
			description: 'Location name',
		},
		number: {
			type: GraphQL.GraphQLInt,
			description: 'Location number',
		},
		street1: {
			type: GraphQL.GraphQLString,
			description: 'Location street1',
		},
		street2: {
			type: GraphQL.GraphQLString,
			description: 'Location street2',
		},
		suburb: {
			type: GraphQL.GraphQLString,
			description: 'Location suburb',
		},
		state: {
			type: GraphQL.GraphQLString,
			description: 'Location state',
		},
		postcode: {
			type: GraphQL.GraphQLString,
			description: 'Location postcode',
		},
		country: {
			type: GraphQL.GraphQLString,
			description: 'Location country',
		},
		geo: {
			type: GraphQL.GraphQLList(GraphQL.GraphQLString),
			description: 'An array [longitude, latitude]',
		},
	},
});

module.exports = (field) => KeystoneLocationType;
