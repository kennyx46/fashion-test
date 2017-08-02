'use strict';

angular.module('myApp.services', [])

.factory('FlickrService', ["$http", function($http) {

  function searchImages(options) {
    var params = {
      method: 'flickr.photos.search',
      api_key: '98c1c35408447c96c589c7fc298498ec',
      // api_key: '5fd133c593af28d299cbcb00a2064d20',
      format: 'json',
      nojsoncallback: 1,
      // api_sig: '1df4daca7963508c63b71e0a909e5c6f',
      tags: options.tags,
      user_id: options.userId,
      per_page: options.perPage || 1,
      extras: 'date_upload, date_taken, owner_name, views, url_q',
      sort: 'interestingness-desc'
    }

    var paramsStr = Object.keys(params).reduce(function (acc, key) {
      return params[key] ? acc + "&" + key + "=" + params[key] : acc
    }, "")

    return $http.get("https://api.flickr.com/services/rest/?" + paramsStr)
  }

  return {
    searchImages: searchImages
  }

}]);