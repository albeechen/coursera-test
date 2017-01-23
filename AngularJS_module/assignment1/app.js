/*(function () {
'use.strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.lunchlist = "";
    $scope.message ="";
    
    $scope.LunchCheckFun = function () {
    	var lists = $scope.lunchlist.split(',');
    	var number = 0;
	    for(var i = 0; i < lists.length; i++ )
	    	if(lists[i].length > 0) number++;
	    if(number === 0){
	      $scope.message = "Please enter data first";
	    }
	    else if( number <= 3 ){
	      $scope.message = "Enjoy!";
	    }
	    else{
	      $scope.message = "Too much!";
	    }
	}
};

})();*/

!function(){"use.strict";function e(e){e.lunchlist="",e.message="",e.LunchCheckFun=function(){for(var n=e.lunchlist.split(","),c=0,s=0;s<n.length;s++)n[s].length>0&&c++;0===c?e.message="Please enter data first":3>=c?e.message="Enjoy!":e.message="Too much!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
