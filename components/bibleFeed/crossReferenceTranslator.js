(function (define) {
	"use strict";

	define([],
        function () {
        	function crossReferenceTranslator() {
        	   function tryTranslate(data){
        	     var doc = document.implementation.createHTMLDocument("CrossReference");
        	     doc.documentElement.innerHTML = data;
        	     var crossrefsElement = doc.getElementsByClassName("crossrefs")[0];
        	     
        	      var result = {
          	       success:false,
          	       result:undefined
          	     };
        	     
        	     if(crossrefsElement !== undefined){
        	     
          	     var refElements = crossrefsElement.getElementsByTagName("div");
          	     
          	     var crossrefsElementsArray = Array.prototype.slice.call(refElements);
          	     var refs = crossrefsElementsArray.map(
          	       function(current){
          	         return current.getElementsByTagName("h3")[0].innerText;
          	         
          	       });
          	     
          	     result = {
          	       success:true,
          	       result:refs.slice(1)
          	     };
        	     }
        	     return result;
        	   }
        	   
        	   return {
        	    tryTranslate : tryTranslate
        	  };
        	}
        	return crossReferenceTranslator;
        });

}(define));