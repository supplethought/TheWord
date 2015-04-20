(function (define) {
    "use strict";

    define([],
        function () {
            function bibleGatewayFacade($resource) {
                var bibleGatewayRsbResource = $resource(
                    "https://www.biblegateway.com/resources/reformation-study-bible/:verseId",
                    {
                        verseId: "@verseId"
                    }
                );
                return {
                    rsbCommentary: bibleGatewayRsbResource
                };
            }

            return ["$resource", bibleGatewayFacade];

        });

}(define));