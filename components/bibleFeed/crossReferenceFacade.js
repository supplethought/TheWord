(function (define) {
    "use strict";

    define([],
        function () {
            function crossReferenceFacade($http) {
                var crossReferenceResource = function (verse) {
                    return $http.get(
                        "http://www.openbible.info/labs/cross-references/search",
                        {
                            params: {q: verse}
                        }
                    );

                };
                return {
                    crossReference: crossReferenceResource

                };
            }

            return ["$http", crossReferenceFacade];

        });

}(define));