const keystone = require('keystone');

module.exports = (fieldName, keystoneSchema) => ({
    resolve(parent) {
        let query = keystone.list(keystoneSchema.ref)
            .model
            .find();

        if (keystoneSchema.many) {
            return query
                .where('_id', { $in: parent[fieldName] })
                .exec();
        }

        return query
            .where('_id', parent[fieldName])
            .limit(1)
            .exec()
            .then(res => res[0]);
    },
});
