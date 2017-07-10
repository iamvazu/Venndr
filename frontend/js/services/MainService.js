angular
    .module('app')
    .factory('MainService', MainService);


function MainService($http) {
    return {
        // call to get all job seeker
        get: function (urlRoute, strParam) {
            return $http.get(
                urlRoute,
                { params: { resDesc: strParam } }
            )
        }
    }
};