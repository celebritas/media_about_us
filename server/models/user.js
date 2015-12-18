var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	name: String,
	site: String,
	email: String,
	pwhash: String
});
mongoose.model('User', UserSchema);