(function (define) {
	"use strict";

	define([],
        function () {
        	function controller($scope, bibleFeedAdapter, version) {
        	  $scope.message = "AngularJS + RequireJS skeleton!!!";
        	  
        	 	bibleFeedAdapter
        	 	.getBooks("eng-ESV")
        	 	.then(
        	 	  function(version) {
        	 	    $scope.versions = version;
        	 	    
        	 	  }
        	 	);
        	}
        	return ["$scope", "bibleFeedAdapter", "version", controller];
        });

}(define));