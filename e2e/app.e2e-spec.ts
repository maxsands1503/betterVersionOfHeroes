import { MyProjPage } from './app.po';

describe('my-proj App', () => {
  let page: MyProjPage;

  beforeEach(() => {
    page = new MyProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
