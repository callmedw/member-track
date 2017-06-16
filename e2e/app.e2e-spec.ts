import { MemberTrackPage } from './app.po';

describe('member-track App', () => {
  let page: MemberTrackPage;

  beforeEach(() => {
    page = new MemberTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
