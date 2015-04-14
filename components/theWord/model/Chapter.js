(function (define) {
	"use strict";

	define([],
        function () {
        	function chapterFactory(footNote, crossReference) {
        	  /**
             * Constructor, with class name
             */
            function Chapter(bookId, id, text, osis_end, footNote, crossReferences) {
              // Public properties, assigned to the instance ('this')
              this.bookId = bookId;
              this.id = id;
              this.text = text;
              this.osis_end = osis_end;
              this.footNote = footNote;
              this.crossReferences = crossReferences;
            }
           
            /**
             * Static method, assigned to class
             * Instance ('this') is not available in static context
             */
            Chapter.build = function (data) {
              return new Chapter(
                data.bookId,
                data.id,
                data.text,
                data.osis_end,
                footNote.build(data.footNotes),
                crossReference.build(data.crossReferences)

              );
            };
           
            /**
             * Return the constructor function
             */
            return Chapter;
        	}
        	return chapterFactory;
          
        });
  
}(define));