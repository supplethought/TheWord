(function (define) {
	"use strict";

	define([],
        function () {
        	function controller($scope, bibleFeedFacade) {
        	  $scope.message = "AngularJS + RequireJS skeleton!!!";
        	  
        	 	bibleFeedFacade
        	  .versions
        	  .list(function(versions) {
        	    $scope.versions = versions;
        	  });
        	}
        	return ["$scope", "bibleFeedFacade", controller];
        });

}(define));