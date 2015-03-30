(function(define, angular) {
    "use strict";
    define([
        "components/mainController",
        "components/stateConfig"
    ],
        function(mainController, stateConfig){
            var moduleName = "TheWordApp";
            angular.module(moduleName, ["ui.router"])
                .config(stateConfig)
                .run(['$state', function ($state) {
                    $state.transitionTo('home');
                }])
                .controller("mainController", mainController);
            angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);
            return moduleName;
            });
}(define, angular));
