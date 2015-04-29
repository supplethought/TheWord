(function (define) {
    "use strict";

    define([],
        function () {
            function controller($scope, $log, biblesAdapter) {
                $scope.message = "The Word";
                biblesAdapter
                    .getBooks("eng-ESV")
                    .then(function (data) {
                        $scope.books = data.result;
                        $scope.selectedBook = $scope.books[0];
                    });
                $scope.status = {
                    open: false,
                    open2: false,
                    isFirstOpen: true,
                    isFirstDisabled: false
                };
                $scope.oneAtATime = true;
                $scope.toggled = function (open) {
                    $log.log('Dropdown is now: ', open);
                };
                $scope.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };
            }

            return ["$scope", "$log", "biblesAdapter", controller];
        });

}(define));