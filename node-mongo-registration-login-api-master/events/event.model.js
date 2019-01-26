const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    eventname: { type: String, unique: true, required: true },
    host: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Event', schema);