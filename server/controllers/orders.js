var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function(){
	return {
		// ViewPage
		index: function(request, response){
			Order.find({})
			.populate('product')
			.populate('customer')
  			.exec(function(err, records) {
  				console.log(records);
    			if(err){ return response.json(false); }
				else { return response.json(records); }
        	});

       
		},
		// ViewPage
		new: function(request, response){ 

		},
		// Action
		create: function(request, response){
			customerObject = JSON.parse(request.body.customer);
			productObject = JSON.parse(request.body.product);

			Product.findOne({_id: productObject._id}, function(err, record){
				console.log(record.qty);
				console.log(request.body.qty);
				console.log(typeof(request.body.qty))
				if(record.qty >= request.body.qty){

					Product.findOneAndUpdate({_id: productObject._id}, {$inc: {qty: -request.body.qty } }, function(err){
						io.emit('updateAll');
						var customerInstance = new Order({
							customer: customerObject,
							product: productObject,
							qty: request.body.qty
						});
						customerInstance.save(function(err){
							if(err){ return response.json({status:false, error: err}); }
							else { return response.json({status:true}); }
						})

					})



				}
				else{
					return response.json(false);
				}
			})

			
		},
		// ViewPage
		show: function(request, response){

		},
		// Action
		destroy: function(request, response){
			Order.remove({_id:request.params.id}, function(err){
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