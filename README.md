<div align="center">
  <h1>⚠️ Archived</h1>
  <p>This repository is archived and is no longer maintained.</p>
  <p>For the latest Keystone release please visit <a href="https://keystonejs.com">the Keystone website.</a></p>
  <hr>
</div>
<br>

# keystone-graphql

GraphQL schema generator for use with KeystoneJS.

Currently under intense development, and only available as a preview of what we may eventually build.

Feedback and collaboration welcome.

## Usage

```javascript
// keystone.js

keystone.set('routes', require('./routes'));
```

```javascript
// routes/index.js

const keystoneGraphql = require('keystone-graphql');

exports = module.exports = function (app) {
    app.use('/graphql', keystoneGraphql({
        graphiql: true,
        excludedLists: ['User']
    }));
    // Views
    // ...
};
```

## Options

**graphiql** *Boolean* (default: false)
<br> Enable GraphQL's built-in query inspector.

**excludedLists** *[String]* (default: [])
<br> Names of keystone lists to not include in GraphQL. Relationship fields referencing excluded lists will not exist
in GraphQL.

## Virtuals

Mongoose virtuals are supported with one caveat. Because GraphQL is strictly typed, you'll need to include the
type of response expected from your virtual. Here is an example:

```javascript
const keystone = require('keystone');

const User = new keystone.List('User');

User.schema.virtual('fullName', {
    type: keystone.Field.Types.String
}).get(function () {
    return this.firstName + this.lastName;
});
```
 
If the type is a `Relationship`, you'll need to define the related list, but instead of using `ref`,
you'll need to use `_ref`. This is because Mongoose uses `ref` for it's own internal purposes. 

```javascript
const keystone = require('keystone');

const Company = new keystone.List('Company');

Company.schema.virtual('employees', {
    type: keystone.Field.Types.Relationship, _ref: 'User', many: true
}).get(function () {
    return keystone.list('User').model
        .find()
        .where('company', this._id)
        .exec();
});
```
