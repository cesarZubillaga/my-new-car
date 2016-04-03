(function(){

  angular
       .module('cars')
       .controller('CarCtrl', [
          'CarService', '$scope', '$log', '$q', '$http',
           CarCtrl
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function CarCtrl( CarService, $scope, $log, $http) {
       var self = this;
      $scope.car = {
          link: null,
          observation: null,
      };
       self.selected     = null;
      $scope.toUTCDate = function(date){
          var date = new Date(date);
          var year  = date.getUTCFullYear();
          var month = date.getUTCMonth();
          var day   = date.getUTCDate();
          var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
          return day + '-' + month + '-' + year;
      };

      $scope.submit = function(){
          CarService.postCar($scope.car)
              .then(function(response) {
                    $scope.cars.push(response.data);
                    $scope.car.link = null;
                    $scope.car.observation = null;
          },function(err){
                    $scope.err = err;
          });;
      }
       CarService
           .getCars()
           .then(function(response) {
               $scope.cars = response.data;
           },function(err){
               $scope.err = err;
           });
  }

})();
