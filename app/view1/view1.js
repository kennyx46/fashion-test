'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: '$ctrl'
  });
}])

.controller('View1Ctrl', ["FlickrService", function(FlickrService) {
  var vm = this

  vm.searchTag = ""
  vm.userId = ""
  vm.searchResults = []
  vm.selectedSort = "views"

  vm.submit = function () {
    // console.log("vm.tagForm")
    // console.log(vm.searchTag)
    FlickrService.searchImages({tags: vm.searchTag, userId: vm.userId})
      .then(function (res) {
        var photo = res.data.photos.photo[0]
        photo.searchTag = vm.searchTag
        console.log(res.data)
        vm.searchResults.push(photo)
        // vm.tagForm.$setPristine()
        vm.searchTag = ""
        vm.userId = ""
      })
  }

}]);