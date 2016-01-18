var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		// ViewPage
		index: function(request, response){
			Customer.find({}, function(err, records){
				if(err){ return response.json(false); }
				else { return response.json(records); }
			})
		},
		// ViewPage
		new: function(request, response){ 

		},
		// Action
		create: function(request, response){
			var customerInstance = new Customer({
				first_name: request.body.first_name,
				last_name: request.body.last_name
			});
			customerInstance.save(function(err){
				io.emit('updateAll');
				if(err){ return response.json(err); }
				else { return response.json(true); }
			})
		},
		// ViewPage
		show: function(request, response){

		},
		// Action
		destroy: function(request, response){
			Customer.remove({_id:request.params.id}, function(err){
				if(err){ return response.json(false); }
				else { return response.json(true); }
			})
		},
		// ViewPage
		edit: function(request, response){

		},
		// Action
		update: function(request, response){

		}
	}
})();