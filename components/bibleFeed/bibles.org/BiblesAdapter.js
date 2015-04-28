(function (define) {
    "use strict";

    define([],
        function () {
            function biblesAdapter($q, biblesFacade, biblesTranslator) {

                function getBooks(versionId) {
                    var delay = $q.defer();

                    biblesFacade
                        .books
                        .list({versionId: versionId})
                        .$promise
                        .then(function (data) {
                            var result = biblesTranslator.tryTranslate(data.response, "Book");
                            delay.resolve(result);
                        });
                    return delay.promise;
                }

                return {
                    getBooks: getBooks

                };
            }

            return ["$q", "biblesFacade", "biblesTranslator", biblesAdapter];

        });

}(define));