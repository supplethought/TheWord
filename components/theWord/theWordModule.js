(function(define, angular) {
    "use strict";
    define([
      "bibleFeed/bibleFeedModule",
      "theWord/theWordController",
      "theWord/theWordStateConfig",
      "theWord/userFactory"
    ],
        function(bibleFeedModule, theWordController, theWordStateConfig, userFactory){
            var moduleName = "theWord.module";
            angular
            .module(moduleName, ["ui.router", bibleFeedModule])
            .config(theWordStateConfig)
            .run(['$state', function ($state) {
              $state.transitionTo('home');
              }])
            .controller("theWordController", theWordController)
            .factory("user", userFactory);
            
            angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);
            
            return moduleName;
            });
}(define, angular));
