(function(){

  angular
       .module('links')
       .controller('LinkCtrl', [
          'linkService', '$scope', '$log', '$q', '$http',
           LinkCtrl
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LinkCtrl( linkService, $scope, $log, $q, $http) {
    var self = this;
    $scope.link = 'LinkCtrl';
    self.selected     = null;
    self.links        = [ ];

      $http
          .get('http://127.0.0.1:3000/api/links')
          .then(function mySucces(response) {
              console.log(response.data)
              $scope.links = response.data;
          }, function myError(response) {
              return response.statusText;
          });

    // Load all registered users

    //linkService
    //      .loadAllLinks()
    //      .then( function( links ) {
    //        $scope.links = links;
    //        self.selected = links[0];
    //      });

  }

})();
