'use strict';

angular.module('myApp.tagForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tagForm', {
    templateUrl: 'tagForm/tagForm.html',
    controller: 'TagFormCtrl',
    controllerAs: '$ctrl'
  });
}])

.controller('TagFormCtrl', ["FlickrService", "$location", function(FlickrService, $location) {
  var vm = this

  vm.searchTag = ""
  vm.userId = ""
  vm.searchResults = []
  vm.selectedSort = "views"

  vm.submit = function () {
    FlickrService.searchImages({tags: vm.searchTag, userId: vm.userId})
      .then(function (res) {
        var photo = res.data.photos.photo[0]

        if (photo) {
          photo.searchTag = vm.searchTag
          photo.userId = vm.userId
          console.log(res.data)
          vm.searchResults.push(photo)
        }
        vm.searchTag = ""
        vm.userId = ""
      })
  }

  vm.showDetails = function (item) {
    $location.path('/tags')
      .search("tags", item.searchTag)
      .search("userId", item.userId)
  }

}]);