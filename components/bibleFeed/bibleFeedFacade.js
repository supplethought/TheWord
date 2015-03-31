(function (define) {
	"use strict";

	define([],
        function () {
        	function bibleFeedFacade($resource) {
        	  var baseUri = "https://bibles.org/v2";
        	  var versionsResource = $resource(baseUri + "/versions.js",null,{
        	    list:{
        	      method: "GET",
        	      headers: {"Authorization": "Basic M1JZVHpaTTNtaWdlaERLMjU3YVVMTEEwMXhjbmxZOFJCVWxTTFpjaDpY"}
        	    }
        	  });
        	  var booksResource = $resource(baseUri + "/:versionId/books.js",  {versionId:'@id'});
        	   return {
        	    versions : versionsResource,
        	    books : booksResource
        	  };
        	}
        	return ["$resource", bibleFeedFacade];
        });

}(define));