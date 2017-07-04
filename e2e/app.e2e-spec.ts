import { DemoI18nPage } from './app.po';

describe('demo-i18n App', () => {
  let page: DemoI18nPage;

  beforeEach(() => {
    page = new DemoI18nPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
