angular
    .module('app')
    .factory('MainService', MainService);


function MainService($http) {
    return {
        // call to get all postings 
        get: function (strParam) {
            return $http.get('/api/test',{ params: { resDesc: strParam } })
        }
    }
};
