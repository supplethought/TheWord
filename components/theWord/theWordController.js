(function (define) {
    "use strict";

    define([],
        function () {
            function controller($scope, bibleFeedAdapter, version) {
                $scope.message = "AngularJS + RequireJS skeleton!!!";
                function callback(bibleVersion) {
                    $scope.versions = bibleVersion;

                }
                bibleFeedAdapter
                    .getBooks("eng-ESV")
                    .then(callback(version));
            }

            return ["$scope", "bibleFeedAdapter", "version", controller];
        });

}(define));