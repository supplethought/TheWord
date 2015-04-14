(function(define, angular) {
    "use strict";
    define([
      "theWord/model/Version",
      "theWord/model/Book",
      "theWord/model/Chapter",
      "theWord/model/Verse",
      "theWord/model/FootNote",
      "theWord/model/CrossReference"
      
    ],
        function(version, book, chapter, verse, footNote, crossReference){
            var moduleName = "theWordModel.module";
            angular
            .module(moduleName, [])
            .factory("version", version)
            .factory("book", book)
            .factory("chapter", chapter)
            .factory("verse", verse)
            .factory("footNote", footNote)
            .factory("crossReference", crossReference);

            return moduleName;
            });
}(define, angular));
