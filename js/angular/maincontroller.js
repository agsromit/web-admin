//maincontroller.js

app.controller("LoginController", function($scope , $http ){
 $scope.loginUser = function(){

 var postdata = {};
 postdata.UserName = $scope.userUsername;
 postdata.Password = $scope.userPassword;
 
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
	        	alert(data.Message)
	        }
	        
       })
 .error(function() {
         console.log("error");
        }); 
 } 
});
/*
// logOut

	$scope.logoutUser = function(){
		if ( ! confirm("Are you sure you want to logOut?") ) {
	        window.location = "index.html";
	        //event.preventDefault();
	    	//alert("ok");
	    	}
	    }

*/

/*
file.controller("FileUploadController", function($scope , $http){

	/*
function upload($scope) {
	    $scope.data = 'none';
	    $scope.add = function(){
	    	alert("ok");
			var f = document.getElementById('file').files[0],
	        r = new FileReader();
	      	r.onloadend = function(e){
	        $scope.data = e.target.result;
	      }
	      r.readAsBinaryString(f);
	    }
	}	
	
	*/

/*alert($scope.type);

$scope.add = function(){
	$http({
		   method: 'POST', 
		   url: "http://app.better-life.co.in/Nightingales/api/BackOffice/ImportWorkPlan",
		   headers: {'Content-Type': 'application/x-www-form-urlencoded'},  
		   data: '{}'
		  }).
		  success(function(data) {
		      	alert("success");
		      	console.log(data);
		     }).
		     error(function() {
		      	alert("error");
		      });
	}	     
});
*/
