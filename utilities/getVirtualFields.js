const keystone = require('keystone');
const keystoneTypes = keystone.Field.Types;

module.exports = (fieldName, type) => {
    switch (type) {
        case keystoneTypes.CloudinaryImage:
        case keystoneTypes.CloudinaryImages:
            return [`${fieldName}.exists`, `${fieldName}.folder`];
            break;
        case keystoneTypes.Name:
            return [`${fieldName}.full`];
            break;
        case keystoneTypes.Relationship:
            return [`${fieldName}RefList`];
            break;
        case keystoneTypes.Password:
            return [`${fieldName}_hash`];
            break;
    }
    return [];
};
