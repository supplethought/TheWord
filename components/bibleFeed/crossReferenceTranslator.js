(function (define, document) {
    "use strict";

    define([],
        function () {
            function crossReferenceTranslator() {
                function tryTranslate(data) {
                    var doc = document.implementation.createHTMLDocument("CrossReference"),
                        crossrefsElement = doc.getElementsByClassName("crossrefs")[0],
                        result = {
                            success: false,
                            result: undefined
                        },
                        refElements,
                        crossrefsElementsArray,
                        refs;
                    doc.documentElement.innerHTML = data;
                    if (crossrefsElement) {

                        refElements = crossrefsElement.getElementsByTagName("div");
                        crossrefsElementsArray = Array.prototype.slice.call(refElements);
                        refs = crossrefsElementsArray.map(
                            function (current) {
                                return current.getElementsByTagName("h3")[0].innerText;
                            }
                        );

                        result = {
                            success: true,
                            result: refs.slice(1)
                        };
                    }
                    return result;
                }

                return {
                    tryTranslate: tryTranslate
                };
            }

            return crossReferenceTranslator;
        });

}(define, document));