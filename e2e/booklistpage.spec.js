describe('book list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should see a list of books', async () => {
    await expect(element(by.text('Clean Code'))).toBeVisible();
    await expect(element(by.text('The Mikado Method'))).toBeVisible();
  });
});
