(function (define) {
	"use strict";

	define([],
        function () {
        	function footNoteFactory() {
        	  /**
             * Constructor, with class name
             */
            function FootNote(id, verseId, content) {
              // Public properties, assigned to the instance ('this')
              this.id = id;
              this.verseId = verseId;
              this.content = content;
            }
           
            /**
             * Static method, assigned to class
             * Instance ('this') is not available in static context
             */
            FootNote.build = function (data) {
              return new FootNote(
                data.id,
                data.verseId,
                data.content
              );
            };
           
            /**
             * Return the constructor function
             */
            return FootNote;
        	}
        	return footNoteFactory;
          
        });
  
}(define));