(function(define, angular) {
    "use strict";
    define([
      "bibleFeed/bibleFeedFacade",
      "bibleFeed/crossReferenceFacade",
      "bibleFeed/crossReferenceAdapter",
      "bibleFeed/crossReferenceTranslator"
      ],
      function(bibleFeedFacade, crossReferenceFacade, crossReferenceAdapter, crossReferenceTranslator){
        var moduleName = "bibleFeed.module";
        
        angular
        .module(moduleName, ["ngResource"])
        .service("bibleFeedFacade", bibleFeedFacade)
        .service("crossReferenceFacade", crossReferenceFacade)
        .service("crossReferenceAdapter", crossReferenceAdapter)
        .service("crossReferenceTranslator", crossReferenceTranslator);
        
        return moduleName;
        
      });
}(define, angular));
