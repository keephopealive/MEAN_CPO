var Product = mongoose.model('Product');
module.exports = (function(){
	return {
		// ViewPage
		index: function(request, response){
			Product.find({}, function(err, records){
				if(err){ return response.json(false); }
				else { return response.json(records); }
			})
		},
		// ViewPage
		new: function(request, response){ 

		},
		// Action
		create: function(request, response){
			var productInstance = new Product({
				title: request.body.title,
				qty: request.body.qty
			});
			productInstance.save(function(err){
				io.emit('updateAll');
				if(err){ return response.json({status:false, error: err}); }
				else { return response.json({status:true}); }
			})
		},
		// ViewPage
		show: function(request, response){

		},
		// Action
		destroy: function(request, response){
			Product.remove({_id:request.params.id}, function(err){
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