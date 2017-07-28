angular
    .module('app')
    .factory('MatchService', MatchService);

function MatchService($http) {
    return {
        // call to get all postings
        get: function (strParam) {
            return $http.get('/api/worker', {params: {resDesc: strParam}});
        }
    };
}
