(function (define) {
	"use strict";

	define([],
        function () {
        	function crossReferenceTranslator() {
        	   function tryTranslate(data){
        	     var doc = document.implementation.createHTMLDocument("CrossReference");
        	     doc.documentElement.innerHTML = data;
        	     var crossrefsElements = doc
        	     .getElementsByClassName("crossrefs")[0]
        	     .getElementsByTagName("div");
        	     
        	     var crossrefsElementsArray = Array.prototype.slice.call(crossrefsElements);
        	     var refs = crossrefsElementsArray.map(
        	       function(current){
        	         return current.getElementsByTagName("h3")[0].innerText;
        	         
        	       });
        	     
        	     var result = {
        	       success:true,
        	       result:refs
        	     };
        	     
        	     return result;
        	   }
        	   
        	   return {
        	    tryTranslate : tryTranslate
        	  };
        	}
        	return crossReferenceTranslator;
        });

}(define));