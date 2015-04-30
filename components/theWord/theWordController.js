(function (define) {
    "use strict";

    define([],
        function () {
            function controller($scope, $log, biblesAdapter) {
                $scope.message = "The Word";
                $scope.theWordGroup = {
                    title: "The Word",
                    content: undefined,
                    open: false
                };
                $scope.readingPlansGroup = {
                    title: "Reading Plans",
                    content: "Dynamic Group Body - 2",
                    open: false
                };
                $scope.oneAtATime = true;
                biblesAdapter
                    .getBooks("eng-ESV")
                    .then(function (data) {
                        $scope.theWordGroup.content = data.result;
                        $scope.books = data.result;
                        $scope.selectedBook = $scope.books[0];
                    });
                $scope.toggled = function (open) {
                    $log.log('Dropdown is now: ', open);
                };
                $scope.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };
                $scope.status = {
                    open: false
                };
            }

            return ["$scope", "$log", "biblesAdapter", controller];
        });

}(define));