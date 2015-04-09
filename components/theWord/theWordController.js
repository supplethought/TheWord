(function (define) {
	"use strict";

	define([],
        function () {
        	function controller($scope, bibleFeedAdapter) {
        	  $scope.message = "AngularJS + RequireJS skeleton!!!";
        	  
        	  /*crossReferenceAdapter
        	  .getCrossReference("Gen 1:2")
        	  .then(function(crossReferences) {
        	    $scope.versions = crossReferences;
        	    
        	  });*/
        	  
        	 	bibleFeedAdapter
        	 	.getBooks("eng-ESV")
        	 	.then(
        	 	  function(version) {
        	 	    $scope.versions = version;
        	 	    
        	 	  }
        	 	);
        	}
        	return ["$scope", "bibleFeedAdapter", controller];
        });

}(define));