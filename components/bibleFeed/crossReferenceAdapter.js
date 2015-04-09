(function (define) {
	"use strict";

	define([],
        function () {
        	function crossReferenceAdapter($q, crossReferenceFacade, crossReferenceTranslator) {
        	  
        	  function getCrossReference(verse) {
        	    var delay = $q.defer();
        	    
        	    crossReferenceFacade
        	    .crossReference(verse)
        	    .then(function (response) {
        	      var result = crossReferenceTranslator.tryTranslate(response.data);
        	      delay.resolve(result);
        	      
        	    }

						);
						return delay.promise;
        	  }
            return {
              getCrossReference : getCrossReference
              
            };
        	}
        	return ["$q", "crossReferenceFacade", "crossReferenceTranslator", crossReferenceAdapter];
          
        });

}(define));