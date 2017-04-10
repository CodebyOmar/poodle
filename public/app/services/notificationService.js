var notify = angular.module('notificationService', []);

notify.factory('Notify', function($http){
    var notificationFactory = {};

    notificationFactory.create = function(jobData){
        return $http.post('/api/job/create', jobData);
    }

    notificationFactory.authenticate = function(){
        return $http.post('pusher/auth', authData);
    }

    return notificationFactory;
});