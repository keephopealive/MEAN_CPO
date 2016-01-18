var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
	
	// Customers Restful API
	app.get('/customers', customers.index );
	app.post('/customers', customers.create );
	app.get('/customers/:id', customers.show );
	app.delete('/customers/:id', customers.destroy );
	app.put('/customers/:id', customers.update );

	// Products Restful API
	app.get('/products', products.index );
	app.post('/products', products.create );
	app.get('/products/:id', products.show );
	app.delete('/products/:id', products.destroy );
	app.put('/products/:id', products.update );

	// Products Restful API
	app.get('/orders', orders.index );
	app.post('/orders', orders.create );
	app.get('/orders/:id', orders.show );
	app.delete('/orders/:id', orders.destroy );
	app.put('/orders/:id', orders.update );

}