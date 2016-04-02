(function(){
  'use strict';

  angular.module('cars')
         .service('CarService', ['$q' , '$http' , CarService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function CarService($q, $http){
      function getCars(){
        return $http.get('http://127.0.0.1:3000/api/cars');
      }

      return {
          getCars : getCars
      }
  }

})();
