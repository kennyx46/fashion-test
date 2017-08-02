'use strict';

angular.module('myApp.components')
  .component('sortingGroup', {
    templateUrl: 'components/sortingGroup/sortingGroup.html',
    bindings: {
      onChange: '&',
    },
    controller: function () {
      var vm = this

      vm.selectedSort = "views"

      vm.onRadioChange = function () {
        vm.onChange({val: vm.selectedSort})
      }
    }
  })