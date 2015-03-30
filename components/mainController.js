(function (define) {
	'use strict';

	define([],
        function () {
        	function controller($scope) {
        	  $scope.message = "AngularJS + RequireJS skeleton!";
        	}
        	return ['$scope', controller];
        });

}(define));