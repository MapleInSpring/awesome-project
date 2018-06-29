describe('App component', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('go_to_playground_button')).tap();
  });

  it('should see playground', async () => {
    await expect(element(by.text('Welcome to Playground'))).toBeVisible();
  });

  it('should go back to booklist', async () => {
    await element(by.text('Back')).tap();
    await expect(element(by.text('Welcome to BookList')));
  });
});
