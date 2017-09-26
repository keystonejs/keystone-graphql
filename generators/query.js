const inflect = require('i')();
const keystone = require('keystone');
const graphql = require('graphql');
const _ = require('lodash');
const graphQlTypes = require('../utilities/graphQlTypes');

module.exports = () => {
    const query = new graphql.GraphQLObjectType({ name: 'Query', fields: {} });

    _.forEach(graphQlTypes, (type, listName) => {
        const single = listName.toLowerCase();
        const plural = inflect.pluralize(single);

        query._typeConfig.fields[single] = {
            type,
            args: {
                id: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
            },
            resolve(parent, { id }) {
                return keystone.list(listName).model
                    .find()
                    .where('_id', id)
                    .limit(1)
                    .exec()
                    .then(res => res[0]);
            }
        };

        query._typeConfig.fields[plural] = {
            type: new graphql.GraphQLList(type),
            args: {
                ids: { type: new graphql.GraphQLList(graphql.GraphQLString) }
            },
            resolve(parent, { ids }) {
                let query = keystone.list(listName).model
                    .find();

                if (ids) {
                    query = query.where('_id', { $in: ids });
                }

                return query.exec();
            },
        }
    });

    return query;
};
