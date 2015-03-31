(function(define, angular) {
    "use strict";
    define([
      "bibleFeed/bibleFeedFacade"
      ],
      function(bibleFeedFacade){
        var moduleName = "bibleFeed.module";
        
        angular
        .module(moduleName, ["ngResource"])
        .service("bibleFeedFacade", bibleFeedFacade);
        
        return moduleName;
        
      });
}(define, angular));
