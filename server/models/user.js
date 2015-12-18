var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	created_at: { type: Date, default: Date.now },
	name: String
});
mongoose.model('User', UserSchema);