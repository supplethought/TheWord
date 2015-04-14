(function (define) {
	"use strict";

	define([],
        function () {
        	function versionFactory() {
        	  /**
             * Constructor, with class name
             */
            function Version(id, name, language, copyright, information, abbreviation) {
              // Public properties, assigned to the instance ('this')
              this.id = id;
              this.name = name;
              this.language = language;
              this.copyright = copyright;
              this.information = information;
              this.abbreviation = abbreviation;
            }
           
            /**
             * Static method, assigned to class
             * Instance ('this') is not available in static context
             */
            Version.build = function (data) {
              return new Version(
                data.id,
                data.name,
                data.language,
                data.copyright,
                data.information,
                data.abbreviation
              );
            };
           
            /**
             * Return the constructor function
             */
            return Version;
        	}
        	return versionFactory;
          
        });
  
}(define));