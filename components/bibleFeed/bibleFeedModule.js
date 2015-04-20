(function (define, angular) {
    "use strict";
    define(
        [
            "bibleFeed/bibleFeedFacade",
            "bibleFeed/bibleFeedAdapter",
            "bibleFeed/bibleFeedTranslator",
            "bibleFeed/crossReferenceFacade",
            "bibleFeed/crossReferenceAdapter",
            "bibleFeed/crossReferenceTranslator",
            "bibleFeed/BibleGatewayFacade"
        ],
        function (bibleFeedFacade, bibleFeedAdapter, bibleFeedTranslator, crossReferenceFacade, crossReferenceAdapter, crossReferenceTranslator, bibleGatewayFacade) {
            var moduleName = "bibleFeed.module";

            angular
                .module(moduleName, ["ngResource"])
                .service("bibleFeedFacade", bibleFeedFacade)
                .service("bibleFeedAdapter", bibleFeedAdapter)
                .service("bibleFeedTranslator", bibleFeedTranslator)
                .service("crossReferenceFacade", crossReferenceFacade)
                .service("crossReferenceAdapter", crossReferenceAdapter)
                .service("crossReferenceTranslator", crossReferenceTranslator)
                .service("bibleGatewayFacade", bibleGatewayFacade);

            return moduleName;

        }
    );
}(define, angular));
