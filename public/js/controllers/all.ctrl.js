myAngularObject.controller("CustomersController", function(CustomerFactory){
	var _this = this;
	// name = prompt("give me a name!");
	// if(name){
		// CustomerFactory.setUser(name);
	// }
	CustomerFactory.getUser(function(user){ console.log(user)})

	function getAll(){
		CustomerFactory.getAll(function(customers){
			_this.customers = customers;
		})
	}
	getAll();
	socket.on('updateAll', function(){
		getAll();
    });

	this.create = function(customer){
		CustomerFactory.create(customer, function(errors){
			_this.errors = errors;
			getAll();
		})
	}
	this.destroy = function(customer){
		CustomerFactory.destroy(customer, function(errors){
			_this.errors = errors;
			getAll();
		})
	}
})



myAngularObject.controller("ProductsController", function(ProductFactory){
	var _this = this;
	
	function getAll(){
		ProductFactory.getAll(function(products){
			_this.products = products;
		})
	}
	getAll();
	socket.on('updateAll', function(){
		console.log("updateAll")
		getAll();
    });

	this.create = function(product){
		ProductFactory.create(product, function(errors){
			_this.errors = errors;
			getAll();
		})
	}
	this.destroy = function(product){
		ProductFactory.destroy(product, function(errors){
			_this.errors = errors;
			getAll();
		})
	}
})

myAngularObject.controller("OrdersController", function(CustomerFactory, ProductFactory, OrderFactory){
	var _this = this;
	function getAllProducts(){
		ProductFactory.getAll(function(products){
			_this.products = products;
		})
	}
	CustomerFactory.getUser(function(user){
		console.log(user);
	})
	
	function getAllCustomers(){
		CustomerFactory.getAll(function(customers){
			_this.customers = customers;
		})
	}
	console.log("Trigger");
	socket.on('updateAll', function(){
		console.log("updateAll")
		getAllProducts();
		getAllCustomers();
		getAllOrders();
    });


	function getAllOrders(){
		OrderFactory.getAll(function(orders){
			_this.orders = orders;
		})
	}

	this.create = function(order){
		console.dir(order.product);
		OrderFactory.create(order, function(){
			getAllOrders();
		})
	}
	
	getAllProducts();
	getAllCustomers();
	getAllOrders();
})

