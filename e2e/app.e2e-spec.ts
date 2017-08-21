import { NgAddressBookPage } from './app.po';

describe('ng-address-book App', () => {
  let page: NgAddressBookPage;

  beforeEach(() => {
    page = new NgAddressBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
