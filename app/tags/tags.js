'use strict';

angular.module('myApp.tags', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tags', {
    templateUrl: 'tags/tags.html',
    controller: 'TagsCtrl',
    controllerAs: "$ctrl"
  });
}])

.controller('TagsCtrl', ['FlickrService', '$location', function(FlickrService, $location) {
  var vm = this

  vm.photos = []
  vm.pages = 0
  vm.currentPage = 1

  function init() {
    var params = $location.search()
    params.perPage = 100

    FlickrService.searchImages(params)
      .then(function (res) {
        vm.photos = res.data.photos.photo
      })
  }


  init()
}]);