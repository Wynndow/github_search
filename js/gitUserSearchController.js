githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;
  self.searchTerm = self.searchTerm || '';

  self.doSearch = function() {
    if (self.searchTerm !== '') {
      Search.query(self.searchTerm)
        .then(function(responce) {
          self.searchResult = responce.data;
        });
    }
  };

}]);
