const keystone = require('keystone');
const keystoneTypes = keystone.Field.Types;

const resolvers = new Map();
resolvers.set(keystoneTypes.Relationship, require('./Relationship'));
resolvers.set(keystoneTypes.Datetime, require('./Date'));
resolvers.set(keystoneTypes.Date, require('./Date'));
resolvers.set(keystoneTypes.DateArray, require('./DateArray'));

module.exports = resolvers;
