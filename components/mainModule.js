(function(define, angular) {
    "use strict";
    define([
      "bibleFeed/bibleFeedModule",
      "components/mainController",
      "components/stateConfig"
    ],
        function(bibleFeedModule, mainController, stateConfig){
            var moduleName = "TheWordApp";
            angular.module(moduleName, ["ui.router", bibleFeedModule])
                .config(stateConfig)
                .run(['$state', function ($state) {
                    $state.transitionTo('home');
                }])
                .controller("mainController", mainController);
            angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);
            return moduleName;
            });
}(define, angular));
