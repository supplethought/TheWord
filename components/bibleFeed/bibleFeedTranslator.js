(function (define) {
	"use strict";

	define([],
        function () {
        	function bibleFeedTranslator() {
        	   function tryTranslate(data){
        	      var result = {
          	       success:true,
          	       result:data
          	     };
          	     return result;
        	   }
        	   return {
        	     tryTranslate : tryTranslate
        	  };
        	}
        	return bibleFeedTranslator;
        });

}(define));