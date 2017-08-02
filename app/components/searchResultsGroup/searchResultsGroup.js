'use strict';

angular.module('myApp.components', [])
  .component('searchResultsGroup', {
    templateUrl: 'components/searchResultsGroup/searchResultsGroup.html',
    bindings: {
      showDetails: '&',
      searchResults: '<',
      selectedSort: '<'
    },
    controller: function () {
    }
  })