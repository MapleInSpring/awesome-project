describe('book list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should see title', async () => {
    await expect(element(by.text('Welcome to Booklist'))).toBeVisible();
  });

  it('should see a list of books', async () => {
    await expect(element(by.text('Clean Code'))).toBeVisible();
    await expect(element(by.text('The Mikado Method'))).toBeVisible();
  });

  it('should go to playground', async () => {
    await element(by.text('Playground')).tap();
    await expect(element(by.text('Welcome to Playground'))).toBeVisible();
  });
});
