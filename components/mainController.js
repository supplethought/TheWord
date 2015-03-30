(function (define) {
	'use strict';

	define([],
        function () {
        	function controller($scope) {
        	  $scope.message = "Hello!";
        	}
        	return ['$scope', controller];
        });

}(define));