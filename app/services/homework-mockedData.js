(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('homeworkService', service);

    service.$inject = ['$http'];

    function service($http) {
        return {
            getFakeData: getFakeData
        };

        function getFakeData() {
            return [
                {
                    "id": 1,
                    "gender": "Male",
                    "first_name": "Joseph",
                    "last_name": "Gonzalez",
                    "email": "rgonzalez0@naver.com",
                    "date": "1968-07-19"
                },
                {
                    "id": 1,
                    "gender": "Male",
                    "first_name": "Russell",
                    "last_name": "Gonzalez",
                    "email": "rgonzalez0@naver.com",
                    "date": "1968-07-19"
                },
                {
                    "id": 1,
                    "gender": "Male",
                    "first_name": "Russell",
                    "last_name": "Gonzalez",
                    "email": "rgonzalez0@naver.com",
                    "date": "1968-07-19"
                }
            ];
        }
    }


} (angular));