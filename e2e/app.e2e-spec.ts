import { WebsiteBuilderPage } from './app.po';

describe('website-builder App', () => {
  let page: WebsiteBuilderPage;

  beforeEach(() => {
    page = new WebsiteBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
