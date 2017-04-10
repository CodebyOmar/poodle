var notifications = angular.module('notifyCtrl', ['notificationService']);

notifications.controller('notificationController', function(Notify){
    var self = this;

    self.addTask = function(){
        self.processing = true;
        self.message = '';

        Notify.create(self.jobData)
          .then(function(response){
              self.processing = false;

              if(response.data.status == 'success')
              {
                  self.jobData = {};
                  self.message = response.data.data;
              }else if(response.data.status == 'error'){
                  self.message = response.data.message;
              }
          }), function(error){
              self.error = error.message;
          }
    }
});