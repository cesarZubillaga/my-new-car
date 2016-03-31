(function(){
  'use strict';

  angular.module('links')
         .service('linkService', ['$q' , '$http' , LinkService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function LinkService($q, $http){
    var links = [];
    $http
        .get('http://127.0.0.1:3000/api/links')
        .then(function mySucces(response) {
          var links = response.data;
        }, function myError(response) {
          return response.statusText;
        });

    // Promise-based API
    return {
      loadAllLinks : function() {
        // Simulate async nature of real remote calls
        return $q.when(links);
      }
    };
  }

})();
