var mongoose = require('mongoose');

var PersonalitiesSchema = new mongoose.Schema({
    charCode: String,
    charName: String,
    charGroup: String,
    charQuote: String,
    charContent: String
});

module.exports = mongoose.model('Personalities', PersonalitiesSchema);