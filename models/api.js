var mongoose = require('mongoose');

var apiSchema = mongoose.Schema({
  host: String,
  name: String,
  description: String,
  methods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'method' }]
}, {collection: 'api'});

module.exports = mongoose.model('api', apiSchema);
