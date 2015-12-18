var mongoose = require('mongoose');
var User = mongoose.model("User");
module.exports = (function(){
	return {
	// all methods
		// add: function (req,res){
		// 	var new_customer = new Customer(req.body);
		// 	new_customer.save(function(err, data){
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			res.redirect('/get_customers');
		// 		}
		// 	})
		// },
		// show: function(req,res){
		// 	Customer.find({}, function(err, customers){
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			res.json(customers);
		// 		}
		// 	})
		// },
		// remove: function(req,res){
		// 	console.log(req.body._id);
		// 	Customer.remove({_id: req.body._id}, function(err, data){
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			res.redirect('/get_customers');
		// 		}
		// 	})
		// }
	}
})();