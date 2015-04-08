(function (define) {
	"use strict";

	define([],
        function () {
        	function crossReferenceTranslator() {
        	   function translate(data){
        	     var doc = document.implementation.createHTMLDocument("CrossReference");
        	     doc.documentElement.innerHTML = data;
        	     var crossrefsElement = doc.getElementsByClassName("crossrefs")[0];
        	     return crossrefsElement.innerHTML;
        	   }
        	   
        	   return {
        	    translate : translate
        	  };
        	}
        	return crossReferenceTranslator;
        });

}(define));