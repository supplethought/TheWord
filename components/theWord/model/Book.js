(function (define) {
	"use strict";

	define([],
        function () {
        	function bookFactory() {
        	  /**
             * Constructor, with class name
             */
            function Book(versionId, id, name, language, copyright, information, abbreviation, order, bookGroupId, testamentId, osis_end) {
              // Public properties, assigned to the instance ('this')
              this.versionId = versionId;
              this.id = id;
              this.name = name;
              this.language = language;
              this.copyright = copyright;
              this.information = information;
              this.abbreviation = abbreviation;
              this.order = order;
              this.bookGroupId = bookGroupId;
              this.testamentId = testamentId;
              this.osis_end = osis_end;
            }
           
            /**
             * Static method, assigned to class
             * Instance ('this') is not available in static context
             */
            Book.build = function (data) {
              return new Book(
                data.versionId,
                data.id,
                data.name,
                data.language,
                data.copyright,
                data.information,
                data.abbreviation,
                data.order,
                data.bookGroupId,
                data.testamentId,
                data.osis_end

              );
            };
           
            /**
             * Return the constructor function
             */
            return Book;
        	}
        	return bookFactory;
          
        });
  
}(define));