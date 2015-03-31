(function (define) {
	"use strict";

	define([],
        function () {
        	function bibleFeedFacade($resource) {
        	  var baseUri = "https://bibles.org/v2";
        	  var versions1Resource = $resource("https://api.biblia.com/v1/bible/content/LEB.html?passage=John3.16&key=8f708ee3b8a4f6f305b8ee58fceadfa4");
        	  var versionsResource = $resource(baseUri + "/versions.js", null,
        	  {
        	      "get_versions": {
        	        method: "GET",
        	        headers:{
        	          "Content-Type" : "application/json",
        	          "Authorization" : "Basic M1JZVHpaTTNtaWdlaERLMjU3YVVMTEEwMXhjbmxZOFJCVWxTTFpjaDpY"
        	        }
        	      }
        	  });
        	  var booksResource = $resource(baseUri + "/:versionId/books.js",  {versionId:'@id'});
        	   return {
        	    versions : versionsResource,
        	    books : booksResource,
        	    versions1 : versions1Resource
        	  };
        	}
        	return ["$resource", bibleFeedFacade];
        });

}(define));