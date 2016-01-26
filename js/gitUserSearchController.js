githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(responce) {
        self.searchResult = responce.data;
      })
  };

}]);
