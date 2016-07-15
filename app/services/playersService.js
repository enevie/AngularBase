(function (angular) {
    'use strict';
var players = [];

    angular
        .module('app')
        .factory('playersService', service);

    service.$inject = ['$http'];

    function service($http) {
        getPlayers();
        return {
            players : players
        };

        function getPlayers() {
            $http({
                headers: { 'X-Auth-Token': 'a0088b313d924635ab50baa304a5be38' },
                url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
                dataType: 'json',
                type: 'GET',
            }).then(function (response) {
                players.push(response.data);
            });
        }
    }

} (angular));