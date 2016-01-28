describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));
  var ctrl;

  describe('initialization', function() {

    beforeEach(inject(function($controller) {
      ctrl = $controller('GitUserSearchController');
    }));

    it('initialises with an empty search result and term', function() {
      expect(ctrl.searchResult).toBeUndefined();
      expect(ctrl.searchTerm).toBe('');
    });

  });

  describe('when searching for a user', function() {
    var scope, fakeSearch;

    beforeEach(function() {
      module(function ($provide) {

        fakeSearch = jasmine.createSpyObj('fakeUserInfo', ['query']);

        $provide.factory('Search', function() {
          return fakeSearch;
        });

      });
    });

    beforeEach(inject(function($q, $rootScope, $controller) {
      scope = $rootScope;
      fakeSearch.query.and.returnValue($q.when({data: items}));
      ctrl = $controller('GitUserSearchController');
    }));


    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$apply();
      expect(ctrl.searchResult).toEqual(items);
    });
  });
});
