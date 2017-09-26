const graphqlHTTP = require('express-graphql');
const getSchema = require('./generators/schema');

module.exports = ({ graphiql = false }) => (
    graphqlHTTP({
        schema: getSchema(arguments[0]),
        graphiql,
    })
);
