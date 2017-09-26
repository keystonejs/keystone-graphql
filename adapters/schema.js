const keystone = require('keystone');
const typeAdapter = require('./type');
const resolvers = require('./resolvers');
const keystoneTypes = keystone.Field.Types;

function virtualOptions(key) {
    switch (key) {
        case 'id':
            return {
                type: keystoneTypes.Text,
            };
    }
}

module.exports.field = (fieldName, keystoneSchema) => {
    const graphqlField = {
        type: typeAdapter(keystoneSchema),
    };

    if (resolvers.has(keystoneSchema.type)) {
        Object.assign(
            graphqlField,
            resolvers.get(keystoneSchema.type)(fieldName, keystoneSchema)
        );
    }

    return graphqlField;
};

module.exports.virtual = (fieldName, virtualField) => {
    if (!(virtualField.options && Object.keys(virtualField.options).length)) {
        virtualField.options = virtualOptions(fieldName)
    }

    return {
        type: typeAdapter(virtualField.options),
        resolve: (parent) => virtualField.getters[0].call(parent),
    };
};
