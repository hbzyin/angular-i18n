import { browser, by, element } from 'protractor';

export class DemoI18nPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
