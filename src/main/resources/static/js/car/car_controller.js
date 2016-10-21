'use strict';

myApp.controller('carCtrl', ['$scope', 'carService', function($scope, carService) {	
	$scope.garage =  {
		cars: [],
		selectedCar: null,
		newcar: carService.createModel()
	}
	
	// Get a single car
    $scope.getCar = function(indexCar) {
    	console.log("getCar");
    	
    	carService.crud().get({id: indexCar}, function(data) {
    		console.log(data);
    		$scope.garage.selectedCar = {brand: data.brand, color: data.color, sign: data.sign};
        });
    };
    
    // Get a single car
    $scope.getAllCars = function() {
    	console.log("getAllCars");
    	
    	carService.crud().query(function(data) {
    	    // success handler
    		console.log(data);
    		$scope.garage.cars = data.cars;
    		
    	}, function(error) {
    	    // error handler
    		console.log(error);
    		$scope.garage.cars = null;
    	});
    };
    
    // Save a single car
    $scope.create = function() {
    	console.log("create");
    	
    	carService.crud().save($scope.garage.newcar, function(data) {
    	    // success handler
    		console.log(data);
    		$scope.garage.newcar = carService.createModel();
    	}, function(error) {
    	    // error handler
    		console.log(error);
    	});
    };
    
}]);