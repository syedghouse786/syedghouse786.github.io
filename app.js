var module=angular.module("shoppingcart",['ngRoute', 'ngAnimate', 'ngTouch']).config(function($routeProvider){
	$routeProvider
	.when('/',{
	templateUrl : "templates/home.html",
	controller: "home"
	})
	.when('/register',{
	templateUrl : "templates/register.html",
	controller: "register"
	})
	.when('/productslist',{
	templateUrl : "templates/productslist.html",
	controller: "productslist"
	})
	.when('/cart',{
	templateUrl : "templates/cart.html",
	controller: "cart"
	})
	.when('/clearance',{
	templateUrl : "templates/clearance.html",
	controller: "clearance"
	})  
	.when('/logIn',{
	templateUrl : "templates/logIn.html",
	controller: "logIn"
	}) 
	.otherwise({
		redirectTo: "templates/home.html",
		controller: "home"
	});
}).service('originalproducts', function () {
	var products =[];
	return {
		getProducts: function () {
			return products;
		},
		setProducts: function(originalproducts) {
			products = originalproducts;
		}
	};
}).service('mycart', function () {
	var cart =[];
	return {
		getCart: function () {
			return cart;
		},
		setCart: function(myproducts) {
			cart = myproducts;
		}
	};
}).controller("appController",function($scope, mycart){
	$scope.saved = localStorage.getItem('cartProducts');
	$scope.productsInCart = ($scope.saved !==null) ? JSON.parse($scope.saved) : mycart.getCart();
});

