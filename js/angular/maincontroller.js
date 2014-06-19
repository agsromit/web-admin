//maincontroller.js

app.controller("LoginController", function($scope , $http ){
 $scope.loginUser = function(){
	
 var postdata = {};
 postdata.UserName = $scope.userUsername;
 postdata.Password = $scope.userPassword;

var err = 1;

// user name validation
if( postdata.UserName == null){
	 $scope.userUsernameBlank = "Please Enter the UserName";
	 err=0;
}else{$scope.userUsernameBlank = ""; err = 1;}

//password validation
if( postdata.Password  == null){
	 $scope.userPasswordBlank = "Please Enter the Password";
	 err=0;
}else{$scope.userPasswordBlank = ""; err = 1;}


if(err == 0){return false;}//else{return false;}

var postdatastring = JSON.stringify(postdata);
 
   $http({
      method: 'POST', 
      url: "http://app.better-life.co.in/Nightingales/api/BackOffice/Login",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
      data: "="+postdatastring
      })
 .success(function(data) {
          	//console.log( 'success, got data: ', data );
          	eval(data);	
          	//console.log(  );
			if( data.Success == true ){
	        window.location = "html/admin-home.html";
	        }else{
	        	alert("Please Enter Valid Username Or password")
	        }
	        
       })
 .error(function() {
         console.log("error");
        }); 
 } 
});

