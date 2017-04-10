angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/',{
          templateUrl: 'app/views/pages/create_user.html',
          controller: 'userController',
          controllerAs: 'user'
      })
      .when('/poodle_board', {
          templateUrl: 'app/views/pages/poodle_board.html',
          controller: 'notificationController',
          controllerAs: 'job'
      }).otherwise({
          redirectTo:'/'
      });
     $locationProvider.html5Mode(true);
});