const mognoose = require('mongoose');

const typesSchema = new mognoose.Schema({
    construction_types: [String]
});

module.exports = typesSchema;