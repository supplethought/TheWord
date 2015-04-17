(function (define) {
    "use strict";

    define([],
        function () {
            function bibleFeedTranslator() {
                function tryTranslate(data) {
                    return {
                        success: true,
                        result: data
                    };
                }

                return {
                    tryTranslate: tryTranslate
                };
            }

            return bibleFeedTranslator;
        });

}(define));