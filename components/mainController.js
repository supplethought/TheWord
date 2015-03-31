(function (define) {
	"use strict";

	define([],
        function () {
        	function controller($scope, bibleFeedFacade) {
        	  $scope.message = "AngularJS + RequireJS skeleton!!!";
        	  bibleFeedFacade
        	  .versions1
        	  .get(function(versions) {
        	    $scope.versions = versions;
        	  });
        	}
        	return ["$scope", "bibleFeedFacade", controller];
        });

}(define));