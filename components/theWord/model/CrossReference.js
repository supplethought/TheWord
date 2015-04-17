(function (define) {
    "use strict";

    define([],
        function () {
            function crossReferenceFactory() {
                /**
                 * Constructor, with class name
                 */
                function CrossReference(id, verseId, content) {
                    // Public properties, assigned to the instance ('this')
                    this.id = id;
                    this.verseId = verseId;
                    this.content = content;
                }

                /**
                 * Static method, assigned to class
                 * Instance ('this') is not available in static context
                 */
                CrossReference.build = function (data) {
                    return new CrossReference(
                        data.id,
                        data.verseId,
                        data.content
                    );
                };

                /**
                 * Return the constructor function
                 */
                return CrossReference;
            }

            return crossReferenceFactory;

        });

}(define));