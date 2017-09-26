const _ = require('lodash');
const { field: fieldAdapter, virtual: virtualAdapter } = require('../adapters/schema');
const getVirtualFields = require('../utilities/getVirtualFields');

module.exports = (list, excludedLists) => {
    const virtualFieldsExcluded = ['_', 'list'];

    return Object.assign(
            _(list.schemaFields[0])
                .omitBy((keystoneSchema, fieldName) => excludedLists.includes(keystoneSchema.ref))
                .reduce((fields, keystoneSchema, fieldName) => {
                    fields[fieldName] = fieldAdapter(fieldName, keystoneSchema);
                    // some virtual fields keystone generates don't make sense for api requests. we'll flag them here to not be included.
                    virtualFieldsExcluded.push(...getVirtualFields(fieldName, keystoneSchema.type));
                    return fields;
                }, {})
            ,
            _(list.schema.virtuals)
                .omitBy((virtualField, fieldName) => virtualFieldsExcluded.includes(fieldName))
                .omitBy((virtualField, fieldName) => excludedLists.includes(virtualField.ref || virtualField._ref))
                .reduce((fields, virtualField, fieldName) => {
                    fields[fieldName] = virtualAdapter(fieldName, virtualField);
                    return fields;
                }, {})
        );
};
