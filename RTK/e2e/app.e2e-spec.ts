import { RTKPage } from './app.po';

describe('rtk App', () => {
  let page: RTKPage;

  beforeEach(() => {
    page = new RTKPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
