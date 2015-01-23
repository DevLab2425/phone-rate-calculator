(function(angular){
	
	angular.module('RateCalculator', []);
	
	angular.module('RateCalculator')
		.controller('CalculatorController', ['$scope', '$filter', function($scope, $filter){
			function calculateRate(minutes){
				var FIRST_RATE = parseFloat( $scope.rates.first ),
					ADDITIONAL_RATE = parseFloat( $scope.rates.additional );
					
				minutes = parseInt(minutes);
			
				if(minutes <= 0){
					return 0;
				}

				return FIRST_RATE + ( ADDITIONAL_RATE * (minutes - 1) );
			};
			
			$scope.cost = 0;
			
			$scope.calculate = function(){
				$scope.cost = $filter('number')( calculateRate( $scope.rates.minutes ) || 0, 2 ) ;
			};
			
		}]);
		
})(angular);