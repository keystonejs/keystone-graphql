const graphql = require('graphql');
const keystone = require('keystone');
const primitiveTypes = require('./types');
const graphQlTypes = require('../utilities/graphQlTypes');
const keystoneTypes = keystone.Field.Types;

module.exports = function type(field) {
    switch (field.type) {
        case Boolean:
        case keystoneTypes.Boolean:
            return graphql.GraphQLBoolean;

        case Date:
        case String:
        case keystoneTypes.Code:
        case keystoneTypes.Color:
        case keystoneTypes.Date:
        case keystoneTypes.Datetime:
        case keystoneTypes.Email:
        // TODO: remove password from list of known types
        case keystoneTypes.Password:
        case keystoneTypes.Text:
        case keystoneTypes.Textarea:
        case keystoneTypes.Url:
            return graphql.GraphQLString;

        case keystoneTypes.TextArray:
        case keystoneTypes.DateArray:
            return new graphql.GraphQLList(graphql.GraphQLString);

        case Number:
        case keystoneTypes.Number:
            return graphql.GraphQLInt;

        case keystoneTypes.NumberArray:
            return new graphql.GraphQLList(graphql.GraphQLInt);

        case keystoneTypes.Name:
            return primitiveTypes.Name;

        case keystoneTypes.CloudinaryImage:
            return primitiveTypes.CloudinaryImage;

        case keystoneTypes.CloudinaryImages:
            return new graphql.GraphQLList(primitiveTypes.CloudinaryImage);

        case keystoneTypes.Markdown:
            return primitiveTypes.Markdown;

        case keystoneTypes.Relationship:
            const typeClass = graphQlTypes[field.ref || field._ref];
            if (field.many) {
                return new graphql.GraphQLList(typeClass)
            }
            return typeClass;

        // TODO: types to add...
        // case keystoneTypes.AzureFile:
        // case keystoneTypes.Embedly:
        // case keystoneTypes.File:
        // case keystoneTypes.GeoPoint:
        // case keystoneTypes.Html:
        // case keystoneTypes.Key:
        // case keystoneTypes.LocalFile:
        // case keystoneTypes.LocalFiles:
        // case keystoneTypes.Location:
        // case keystoneTypes.Money:
        // case keystoneTypes.Password:
        // case keystoneTypes.S3File:
        // case keystoneTypes.Select:

        default:
            if (graphql.isType(field.type)) {
                return field.type;
            }
            throw new Error(`GraphQL: Unrecognized type: ${field.type}`);
    }
};
