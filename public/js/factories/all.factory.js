myAngularObject.factory("CustomerFactory", function($http){
	return {
		setUser: function(user){
			this.user = user;
		},
		getUser: function(callback){
			callback(this.user);
		},
		getAll: function(callback){
			$http.get('/customers').success(function(customers){
				callback(customers);
			});
		},
		create: function(customer, callback){
			$http.post('/customers', customer).success(function(response){
				if(response.errors){ 
					callback(response.errors);
				}
				else{
					callback([]);
				}
			});
		},
		destroy: function(customer, callback){
			$http.delete('/customers/'+customer._id, customer).success(function(){
				callback();
			});
		}

	}
})


myAngularObject.factory("ProductFactory", function($http){
	return {
		getAll: function(callback){
			$http.get('/products').success(function(products){
				callback(products);
			});
		},
		create: function(product, callback){
			$http.post('/products', product).success(function(response){
				if(response.status){ 
					callback([]);
				}
				else{
					callback(response.error.errors);
				}
			});
		},
		destroy: function(product, callback){
			$http.delete('/products/'+product._id, product).success(function(){
				callback();
			});
		}
	}
})

myAngularObject.factory("OrderFactory", function($http){
	return {
		getAll: function(callback){
			$http.get('/orders').success(function(orders){
				callback(orders);
			});
		},
		create: function(order, callback){
			console.log(order);
			var product_id = order.product._id;
			var customer_id = order.customer._id;
			console.log(product_id);
			console.log(customer_id);
			$http.post('/orders', order).success(function(response){
				if(response.status){ 
					callback([]);
				}
				else{
					callback(response.error.errors);
				}
			});
		},
		destroy: function(product, callback){
			$http.delete('/orders/'+product._id, product).success(function(){
				callback();
			});
		}
	}
})