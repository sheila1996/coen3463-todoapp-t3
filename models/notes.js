var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	user: {
		type: String
	},
	createDate: {type: Date, default: Date.now},
	isCompleted: {type: Boolean, default: false}

});

module.exports = mongoose.model('notes', notesSchema);