(function (define, document) {
    "use strict";

    define([],
        function () {
            function bibleGatewayTranslator() {
                function tryTranslate(data) {
                    var doc = document.implementation.createHTMLDocument("ReformationStudyBible"),
                        result = {
                            success: false,
                            result: undefined
                        },
                        commentaryElement;
                    doc.documentElement.innerHTML = data;
                    commentaryElement = doc.getElementsByClassName("article")[0];
                    if (commentaryElement) {
                        result = {
                            success: true,
                            result: commentaryElement.innerHTML
                        };
                    }
                    return result;
                }

                return {
                    tryTranslate: tryTranslate
                };
            }

            return bibleGatewayTranslator;
        });

}(define, document));