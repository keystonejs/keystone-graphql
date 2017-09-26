const keystone = require('keystone');
const graphql = require('graphql');
const _ = require('lodash');
const getQuery = require('./query');
const getFields = require('./fields');
const graphQlTypes = require('../utilities/graphQlTypes');

module.exports = ({ excludedLists = [] }) => {
    // Relationship fields will need the referenced "type" to exist before the field can be defined.
    // For this reason, we will first create all the types and then add the fields.
    _(keystone.lists)
        .omitBy((list, name) => excludedLists.includes(name))
        .forEach((list, name) => {
            graphQlTypes[name] = new graphql.GraphQLObjectType({ name });
        });

    _(graphQlTypes)
        .forEach((type, listName) => {
            type._typeConfig.fields = getFields(keystone.list(listName), excludedLists);
        });

    return new graphql.GraphQLSchema({
        query: getQuery(),
    });
};
