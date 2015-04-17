(function (define) {
    "use strict";

    define([],
        function () {
            function bibleFeedAdapter($q, bibleFeedFacade, bibleFeedTranslator) {

                function getBooks(versionId) {
                    var delay = $q.defer();

                    bibleFeedFacade
                        .books
                        .list({versionId: versionId})
                        .$promise
                        .then(function (data) {
                            var result = bibleFeedTranslator.tryTranslate(data.response);
                            delay.resolve(result);
                        });
                    return delay.promise;
                }

                return {
                    getBooks: getBooks

                };
            }

            return ["$q", "bibleFeedFacade", "bibleFeedTranslator", bibleFeedAdapter];

        });

}(define));