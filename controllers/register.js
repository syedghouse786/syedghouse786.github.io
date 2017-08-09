module.controller("register",function($scope){


			$scope.fname='';
			$scope.lname='';
			$scope.username='';
			$scope.passwrd='';
			$scope.confirmpassword='';
			$scope.phone='';
			$scope.email='';
			$scope.securityanswer='';
		
		//$scope.red= {
			//"border" : "1px solid red"
		//}
		
		
		$scope.color = function(){
			document.getElementsByClassName("names")[0].style.border = " 1px solid grey";
		}
		$scope.colors = function(){
			document.getElementsByClassName("names")[1].style.border = " 1px solid grey";
		}
		$scope.color1 = function(){
			document.getElementsByClassName("inputs")[0].style.border = " 1px solid grey";
		}
		$scope.color2 = function(){
			document.getElementsByClassName("inputs")[1].style.border = " 1px solid grey";
		}
		$scope.color3 = function(){
			document.getElementsByClassName("inputs")[2].style.border = " 1px solid grey";
		}
		$scope.color4 = function(){
			document.getElementsByClassName("inputs")[3].style.border = " 1px solid grey";
		}
		$scope.color5 = function(){
			document.getElementsByClassName("inputs")[4].style.border = " 1px solid grey";
		}
		$scope.color6 = function(){
			document.getElementsByClassName("inputs")[5].style.border = " 1px solid grey";
		}


		/*$scope.details=[{fname:"priyanka",lname:"gandham",username:"priyankagandham",password:"priyanka.209",confirmpassword:"priyanka.209",phone:"8885577790",email:"priyanka.209eee@gmail.com"}];*/
		$scope.submitform= function(){

			if($scope.fname == '' || $scope.lname == '' ||$scope.username == '' || $scope.passwrd == '' || $scope.securityanswer == ''){
				if($scope.fname == ''){
					alert('Enter your First name');
					//$scope.fname = "ng-style ='red'";
					document.getElementsByClassName("names")[0].style.border = " 1px solid red";
				}
				if($scope.lname == ''){
					alert('Enter your Last name');
					document.getElementsByClassName("names")[1].style.border = " 1px solid red";
				}
				if($scope.username == ''){
					alert('Enter your User name');
					document.getElementsByClassName("inputs")[0].style.border = " 1px solid red";
				}
				if($scope.password == ''){
					alert('Enter your Password');
					document.getElementsByClassName("inputs")[1].style.border = " 1px solid red";
				}
				if($scope.confirmpassword == ''){
					alert('Enter Confirm your Password');
					document.getElementsByClassName("inputs")[2].style.border = " 1px solid red";
				}
				if($scope.phone == ''){
					alert('Enter your Phone Number');
					document.getElementsByClassName("inputs")[3].style.border = " 1px solid red";
				}
				if($scope.email == ''){
					alert('Enter your Email Address');
					document.getElementsByClassName("inputs")[4].style.border = " 1px solid red";
				}
				if($scope.securityanswer == ''){
					alert('Enter your securityanswer');
					document.getElementsByClassName("inputs")[5].style.border = " 1px solid red";
				}

			}

		}
		
	});
