angular.module('userService', [])

.factory('User', function($http){
    var userFactory = {};

    userFactory.create  = function(userData){
        return $http.post('/api/user/create', userData);
    }

    return userFactory;
});

