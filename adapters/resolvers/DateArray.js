const GraphQL = require('graphql');
const moment = require('moment');

module.exports = (fieldPath) => ({
	args: {
		format: {
			type: GraphQL.GraphQLString,
			description: 'A formated datetime using Moment.js tokens ' +
				'http://momentjs.com/docs/#/displaying/format/',
		},
	},
	resolve: (parent, { format = 'YYYY-MM-DD' }) => parent[fieldPath].map(date => moment(date).format(format)),
});
