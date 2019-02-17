 var myApp = angular.module('myApp');

 myApp.controller('MoviesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
     console.log('MoviesController loaded...');
     $scope.getProducers = function() {
         $http.get('/api/producers').success(function(response) {
             $scope.producers = response;
         });
     }

     $scope.getActors = function() {
         $http.get('/api/actors').success(function(response) {
             $scope.actors = response;
         });
     }

     $scope.getMovies = function() {
         $http.get('/api/movies').success(function(response) {
             $scope.movies = response;
         });
     }

     $scope.getMovie = function() {
         var id = $routeParams.id;
         $http.get('/api/movies/' + id).success(function(response) {
             $scope.movie = response;
         });
     }
     $scope.addMovie = function() {
         var member = $scope.movie.member;
         var len2 = 0;
         for (var i in member) {
             if (member.hasOwnProperty(i)) {
                 len2++;
             }
         }
         $http.post('/api/movies/', $scope.movie).success(function(response) {
             window.location.href = '#/movies';
         });
     }

     $scope.removeMovie = function(id) {
         $http.delete('/api/movies/' + id).success(function(response) {
             window.location.href = '#/movies';
         });
     }

     $scope.addProducer = function() {
         console.log("aa gya");
         $http.post('/api/producers/', $scope.producer).success(function(response) {
             window.location.reload();
         });
     }

     $scope.addActor = function() {
         console.log("aa gya");
         $http.post('/api/actors/', $scope.actor).success(function(response) {
             window.location.reload();
         });
     }


     //  $scope.dataType = ['type1', 'type2', 'type'];
     $scope.dataType = [
         { id: 1, colId: ['col1', 'col4'], dataTypeName: 'Date' },
         { id: 2, colId: ['col2', 'col3'], dataTypeName: 'Alpha' },
         { id: 3, colId: ['col5', 'col6', 'col7', 'col8'], dataTypeName: 'List Value' }
     ];

     $scope.columns = [{ colId: 'col1', name: '', dataType: [], dataFormat: '', excludedChar: '', maxLength: '', isKeyField: false, isKeyRequired: false }];

     $scope.addNewColumn = function() {
         var newItemNo = $scope.columns.length + 1;
         $scope.columns.push({ 'colId': 'col' + newItemNo });
     };


     $scope.removeColumn = function(index) {
         // remove the row specified in index
         $scope.columns.splice(index, 1);
         // if no rows left in the array create a blank array
         if ($scope.columns.length() === 0 || $scope.columns.length() == null) {
             alert('no rec');
             $scope.columns.push = [{ "colId": "col1" }];
         }


     };


 }]);


 myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {


 }]);