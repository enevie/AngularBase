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
            players: players
        };

        function getPlayers() {
            $http({
                headers: { 'X-Auth-Token': 'a0088b313d924635ab50baa304a5be38' },
                url: 'http://api.football-data.org/v1/teams/86/players',
                dataType: 'json',
                type: 'GET',
            }).then(function (response) {
                    var newArr = [];
                    for (var i = 0; i < response.data.players.length; i += 3) {
                        newArr.push(response.data.players.slice(i, i + 3));
                    }
                    debugger;
                    players.push(newArr);
                });
        }
    }

} (angular));