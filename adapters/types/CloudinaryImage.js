const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLObjectType({
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
