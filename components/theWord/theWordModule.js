(function (define, angular, document) {
    "use strict";
    define(
        [
            "bibleFeed/bibleFeedModule",
            "theWord/theWordController",
            "theWord/theWordStateConfig",
            "theWord/model/theWordModelModule"
        ],
        function (bibleFeedModule, theWordController, theWordStateConfig, theWordModelModule) {
            var moduleName = "theWord.module";
            angular
                .module(moduleName, ["ui.router", "ui.bootstrap", bibleFeedModule, theWordModelModule])
                .config(theWordStateConfig)
                .run(['$state', function ($state) {
                    $state.transitionTo('home');
                }])
                .controller("theWordController", theWordController);

            angular.bootstrap(document.getElementsByTagName("html")[0], [moduleName]);

            return moduleName;
        }
    );
}(define, angular, document));
