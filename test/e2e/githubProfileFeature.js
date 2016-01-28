describe('Github Profile Finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });


  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds the last spike', function() {
    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spike1292');
  });

  it('cleares the page when the search term is removed', function() {
    searchBox.sendKeys('spike');
    searchBox.clear();
    expect((element(by.className('list-group'))).isDisplayed()).toBe(false);
  });
});
