(function (define) {
	"use strict";

	define([],
        function () {
        	function crossReferenceTranslator() {
        	   function translate(data){
        	     return data;
        	   }
        	   
        	   return {
        	    translate : translate
        	  };
        	}
        	return crossReferenceTranslator;
        });

}(define));