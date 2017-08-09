angular.module("shoppingcart").controller("cart",function($scope, mycart){
	$scope.saved = localStorage.getItem('cartProducts');
	$scope.productsInCart = ($scope.saved !==null) ? JSON.parse($scope.saved) : mycart.getCart();
	$scope.removeFromCart = function(product, index){
		$scope.productsInCart.splice(index,1);
		localStorage.setItem('cartProducts', JSON.stringify($scope.productsInCart));
		mycart.setCart($scope.productsInCart);
	};
});