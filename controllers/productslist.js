angular.module("shoppingcart").controller("productslist",function($scope, $http, mycart,originalproducts){
	$scope.presentPage = 0;
	$scope.slideIndex = 0;
	$scope.sortFilter = 'price';
	$scope.reverse = 'true';
	$scope.startPrice = '0';
	$scope.endPrice = '1000';
	$scope.saved = localStorage.getItem('cartProducts');
	$scope.cartProducts = (localStorage.getItem('cartProducts')!==null) ? JSON.parse($scope.saved) : [];
	
	localStorage.setItem('cartProducts', JSON.stringify($scope.cartProducts));
	
	mycart.setCart($scope.cartProducts);
	
	$http.get("products.js").success(function(data){
		$scope.products = data;
		originalproducts.setProducts($scope.products);
	}).catch(function(error){
		console.log("Something went wrong"); 
	});



	$scope.next = function() {
		//$scope.slideIndex < $scope.products.length - 1 ? $scope.slideIndex++ : $scope.slideIndex = 0;
		$scope.slideIndex < 6 ? $scope.slideIndex++ : $scope.slideIndex = 0;
	};
	$scope.prev = function() {
		//$scope.slideIndex > 0 ? $scope.slideIndex-- : $scope.slideIndex = $scope.products.length - 1;
		$scope.slideIndex > 0 ? $scope.slideIndex-- : $scope.slideIndex = 6;
	};
	$scope.click = function(index) {
		$scope.slideIndex=index;
	};
	$scope.setPage = function(index){
		$scope.presentPage = index;
	}
	$scope.newPage = function(place){
		$scope.newProducts=[];
		angular.forEach($scope.products, function (product) {
			if(product.price>=$scope.startPrice && product.price<=$scope.endPrice)
			$scope.newProducts.push(product);
		});
		//if($scope.products.length>$scope.newProducts.length)
		//$scope.presentPage=0;
		if(place=='last'&&$scope.presentPage>=$scope.newProducts.length/9-1){
			return true;
		}else if(place=='first' && $scope.presentPage==0){
			return true;
		}else{
			return false;
		}
	}
	$scope.newPriceRange = function(inputStartPrice,inputEndPrice){
		if(inputStartPrice>=0 && inputStartPrice<=inputEndPrice && inputEndPrice<=1000)
		$scope.startPrice = inputStartPrice;
		$scope.endPrice = inputEndPrice;
		$scope.presentPage= 0;
	}
	$scope.addtocart = function(product){
		$scope.cartProducts.push(product);
		localStorage.setItem('cartProducts', JSON.stringify($scope.cartProducts));
		mycart.setCart($scope.cartProducts);
		//alert(product.name + " is added to cart");
	}
}).filter('firstProduct', function() {
    return function(products, firstProduct) {
		if (!products || !products.length) { return; }
		firstProduct = parseInt(firstProduct,10);
        return products.slice(firstProduct);
    }
}).filter('pagesRange', function() {
  return function(pages, products, startPrice, endPrice, presentPage) {
	newProducts=[];
	angular.forEach(products, function (product) {
		if(product.price>=startPrice && product.price<=endPrice)
		newProducts.push(product);
	});
    pageLength = parseInt(Math.ceil(newProducts.length/9));
    for (var i=0; i<pageLength; i++)
		pages.push(i);
    return pages;
  };
}).filter('priceRange', function() {
  return function(products, startPrice, endPrice) {
	newProducts=[];
	angular.forEach(products, function (product) {
		if(product.price>=startPrice && product.price<=endPrice)
		newProducts.push(product);
	});
    return newProducts;
  };
});