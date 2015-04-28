(function (define) {
    "use strict";

    define([],
        function () {
            function controller($scope, biblesAdapter) {
                $scope.message = "The Word";
                biblesAdapter
                    .getBooks("eng-ESV")
                    .then(function (data) {
                        $scope.books = data.result;
                        $scope.selectedBook = $scope.books[0];
                    });
            }

            return ["$scope", "biblesAdapter", controller];
        });

}(define));