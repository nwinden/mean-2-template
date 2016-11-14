import { Mean2TemplatePage } from './app.po';

describe('mean-2-template App', function() {
  let page: Mean2TemplatePage;

  beforeEach(() => {
    page = new Mean2TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
