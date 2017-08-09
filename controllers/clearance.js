angular.module("shoppingcart").controller("clearance",function($scope, originalproducts){
	$scope.clearanceproducts = originalproducts.getProducts();
	//alert(originalproducts.getProducts().length);
});