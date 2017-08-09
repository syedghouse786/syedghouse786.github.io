module.controller("logIn",function($scope){
	$scope.userid="";
	$scope.pass="";
	$scope.login = function(){
		if($scope.userid == "" && $scope.pass == ""){
			if($scope.userid == ""){
				alert('Please Enter your user name');
					document.getElementsByClassName("validations")[0].style.border="1px solid red";
					return;
				}
				//exit(1);
				if($scope.pass == ""){
					alert('Please Enter your Password');
					document.getElementsByClassName("validations")[1].style.border="1px solid red";
				}
			}
		}
});