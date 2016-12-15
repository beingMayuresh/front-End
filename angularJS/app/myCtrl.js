app.controller("myCtrl", function($scope) {
    $scope.firstName="Mayuresh";
    $scope.lastName="Gupta";
    $scope.changeName = function(){
    	return $scope.firstName + " " + $scope.lastName;
    }
});