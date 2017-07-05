angular
    .module('app')
    .factory('SubmitService', SubmitService);


function SubmitService($http) {
    return {
        // call to get all job seeker
        get: function () {
            return $http.get('/api/jobseekers');
        },

        // call to create a new jobseeker
        create: function (jobseekerData) {
            return $http.post('/api/jobseekers', jobseekerData)
        },

        // call to delete a jobseeker
        delete: function (id) {
            return $http.delete('/api/jobseekers/' + id);
        }
    }
};