(function (define) {
    "use strict";

    define([],
        function () {
            function biblesFacade($resource) {
                var baseUri = "https://bibles.org/v2",
                    versionsResource = $resource(baseUri + "/versions.js", null, {
                        list: {
                            method: "GET",
                            headers: {"Authorization": "Basic M1JZVHpaTTNtaWdlaERLMjU3YVVMTEEwMXhjbmxZOFJCVWxTTFpjaDpY"}
                        }
                    }),
                    booksResource = $resource(baseUri + "/versions/:versionId/books.js", {versionId: "@versionId"}, {
                        list: {
                            method: "GET",
                            headers: {"Authorization": "Basic M1JZVHpaTTNtaWdlaERLMjU3YVVMTEEwMXhjbmxZOFJCVWxTTFpjaDpY"}
                        }
                    });
                return {
                    versions: versionsResource,
                    books: booksResource
                };
            }

            return ["$resource", biblesFacade];
        });

}(define));