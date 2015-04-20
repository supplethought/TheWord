(function (define, angular) {
    "use strict";
    define(
        [
            "bibleFeed/bibles.org/BiblesFacade",
            "bibleFeed/bibles.org/BiblesAdapter",
            "bibleFeed/bibles.org/BiblesTranslator",
            "bibleFeed/crossReferenceFacade",
            "bibleFeed/crossReferenceAdapter",
            "bibleFeed/crossReferenceTranslator",
            "bibleFeed/biblegateway.com/BibleGatewayFacade",
            "bibleFeed/biblegateway.com/BibleGatewayAdapter",
            "bibleFeed/biblegateway.com/BibleGatewayTranslator"
        ],
        function (
            biblesFacade,
            biblesAdapter,
            biblesTranslator,
            crossReferenceFacade,
            crossReferenceAdapter,
            crossReferenceTranslator,
            bibleGatewayFacade,
            bibleGatewayAdapter,
            bibleGatewayTranslator
        ) {
            var moduleName = "bibleFeed.module";

            angular
                .module(moduleName, ["ngResource"])
                .service("biblesFacade", biblesFacade)
                .service("biblesAdapter", biblesAdapter)
                .service("biblesTranslator", biblesTranslator)
                .service("crossReferenceFacade", crossReferenceFacade)
                .service("crossReferenceAdapter", crossReferenceAdapter)
                .service("crossReferenceTranslator", crossReferenceTranslator)
                .service("bibleGatewayFacade", bibleGatewayFacade)
                .service("bibleGatewayAdapter", bibleGatewayAdapter)
                .service("bibleGatewayTranslator", bibleGatewayTranslator);

            return moduleName;

        }
    );
}(define, angular));
