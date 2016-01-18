myAngularObject.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'CustomersController',
		controllerAs: 'customersCtrl',
		templateUrl: '/partials/customers.html'
	})
	.when('/customers', {
		redirectTo:'/'
	})
	.when('/products', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/products.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'ordersCtrl',
		templateUrl: '/partials/orders.html'
	})
})