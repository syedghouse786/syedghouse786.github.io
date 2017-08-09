module.controller("home",function($scope){
	$scope.bannerImages = [{phone:'assets/images/iphone5s-banner.png', background:'linear-gradient(to right,white,yellow)'},
							{phone:'assets/images/mobile-banner.png', background:'linear-gradient(to right,white,yellow)'},
							{phone:'assets/images/mobile_banner2.png', background:'linear-gradient(to right,white,grey)'},
							{phone:'assets/images/banner_pic.png', background:'linear-gradient(to right,white,red)'},
							{phone:'assets/images/banner_img3.png', background:'linear-gradient(to right,white,green)'},
							];
	$scope.previousImage = "assets/images/left.png";
	$scope.nextImage = "assets/images/right.png";
	$scope.slidenumber = 0;
	
		$scope.nextimage = function() {
			$scope.slidenumber < $scope.bannerImages.length - 1 ? $scope.slidenumber++ : $scope.slidenumber = 0;
		};

		$scope.previmage = function() {
			$scope.slidenumber > 0 ? $scope.slidenumber-- : $scope.slidenumber = $scope.bannerImages.length - 1;
		};
		$scope.click = function(index) {
			$scope.slidenumber=index;
		};
		//the brand icons starts here	
	$scope.brands = [
						{brand: 'assets/images/htc.png',brandname:'htc'},
						{brand: 'assets/images/andriod.png',brandname:'andriod'},
						{brand: 'assets/images/lg.png',brandname:'lg'},
						{brand: 'assets/images/samsung.png',brandname:'samsung'},
						{brand: 'assets/images/iphone.png',brandname:'apple'},
						{brand: 'assets/images/lava.png',brandname:'lava'},
						{brand: 'assets/images/sony-icon.png',brandname:'sony'},
						{brand: 'assets/images/motorola.png',brandname:'motorola'},
						{brand: 'assets/images/blackberry-iphone.png',brandname:'blackberry'},
						
					];
});