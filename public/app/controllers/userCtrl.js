angular.module('userCtrl', ['userService'])

.controller('userController', function($scope, $location, User){
    var self = this;
    $scope.type = 'create';

    $scope.saveUser = function(){
        $scope.processing = true;
        $scope.message = '';

        User.create(self.userData)
          .then(function(response){
              $scope.processing = false;

              if(response.data.status == 'success')
              {
                  self.userData = {};
                  $location.path('/poodle_board');
              }else if(response.data.status == 'error'){
                  $scope.error = response.data.message;
              }
          }), function(error){
              $scope.error = error.message;
          }
    }
});

