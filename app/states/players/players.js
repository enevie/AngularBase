(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('players', players)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('players', {
                url: '/players',
                template: '<players></players>'
            });
    }

    function players() {
        var directive = {
            templateUrl: './states/players/players.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };
        return directive;
    }

    controller.$inject = ['$scope', 'playersService'];
    function controller($scope, playersService) {
        $scope.players = playersService.players;


    }

} (angular));