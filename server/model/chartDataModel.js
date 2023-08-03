const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chartDataSchema = new Schema({}, { strict: false }); // this allows any object to be stored

module.exports = mongoose.model('ChartData', chartDataSchema, 'ChartData'); // the third argument is the collection name
