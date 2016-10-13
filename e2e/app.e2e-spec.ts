import { AngularViennaOctoberPage } from './app.po';

describe('angular-vienna-october App', function() {
  let page: AngularViennaOctoberPage;

  beforeEach(() => {
    page = new AngularViennaOctoberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
