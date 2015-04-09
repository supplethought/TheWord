(function (define) {
	"use strict";

	define([],
        function () {
        	function controller($scope, crossReferenceAdapter) {
        	  $scope.message = "AngularJS + RequireJS skeleton!!!";
        	  
        	  crossReferenceAdapter
        	  .getCrossReference("Genesis 1:4")
        	  .then(function(crossReferences) {
        	    $scope.versions = crossReferences;
        	    
        	  });
        	  
        	 	/*bibleFeedFacade.versions
        	  .list(function(versions) {
        	    $scope.versions = versions;
        	  });*/
        	}
        	return ["$scope", "crossReferenceAdapter", controller];
        });

}(define));