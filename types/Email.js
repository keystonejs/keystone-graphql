'use strict'

const GraphQL = require('graphql');

module.exports = (field) => ({
	type: GraphQL.GraphQLString,
	args: {
		validInput: {
			type: GraphQL.GraphQLString,
			description: 'Validates that a valid email has been provided.'
		},
	},
	resolve: (source, args, required, data) => {
		var value = this.getValueFromData(data);
		if (value) {
			return utils.isEmail(value);
		} else {
			return (!required || (value !== undefined && source && source.get(this.path))) ? true : false;
		}
	},
});
