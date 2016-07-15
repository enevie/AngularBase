(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('homework', homework)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('homeworks', {
                url: '/homework',
                template: '<homework></homework>'
            });
    }

    function homework() {
        var directive = {
            templateUrl: './states/homeworks/homework.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };
        return directive;
    }

    controller.$inject = ['$scope', 'homeworkService'];
    function controller($scope, homeworkService) {

        $scope.sayHi = sayHi();
        $scope.secondData = [];
        $scope.add = add;
        $scope.addByInput = addByInput;

        function sayHi() {
            return homeworkService.getFakeData();
        }

        function add(item) {
            $scope.secondData.push(item);
        }

        function addByInput(item) {
            $scope.secondData.push({
                first_name: item
            });
            // $scope.$apply();
        }
    }

} (angular));