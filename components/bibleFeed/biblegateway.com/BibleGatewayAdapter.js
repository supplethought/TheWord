(function (define) {
    "use strict";

    define([],
        function () {
            function bibleGatewayAdapter($q, bibleGatewayFacade, bibleGatewayTranslator) {

                function getCommentary(verse) {
                    var delay = $q.defer();

                    bibleGatewayFacade
                        .rsbCommentary(verse)
                        .then(function (response) {
                            var result = bibleGatewayTranslator.tryTranslate(response.data);
                            delay.resolve(result);

                        });
                    return delay.promise;
                }

                return {
                    getCommentary: getCommentary

                };
            }

            return ["$q", "bibleGatewayFacade", "bibleGatewayTranslator", bibleGatewayAdapter];

        });

}(define));