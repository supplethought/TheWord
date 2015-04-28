(function (define, ng) {
    "use strict";
    define([],
        function () {
            function bibleFeedTranslator(book) {
                function translateResponse(data, model) {
                    if (ng.isArray(data)) {
                        var models = [];
                        ng.forEach(data, function (dto) {
                            models.push(model.build(dto));
                        });
                        return {
                            success: true,
                            result: models
                        };
                    }
                    return {
                        success: true,
                        result: model.build(data)
                    };
                }
                function tryTranslate(data, modelType) {

                    switch (modelType) {
                    case "Book":
                        return translateResponse(data.books, book);
                    }
                    return {
                        success: true,
                        result: data
                    };
                }

                return {
                    tryTranslate: tryTranslate
                };
            }

            return ["book", bibleFeedTranslator];
        });

}(define, angular));