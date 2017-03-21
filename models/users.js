var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema({
	username: {
		type: String,
		required: [true, 'please put in username'],
		minlength: [4, 'use 5 characters']
	},
	email: {
		type: String,
		required: true
	},
	firstname: String,
	lastname: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', UserSchema);