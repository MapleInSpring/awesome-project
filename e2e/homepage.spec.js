describe('App component', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  xit('should have home page', async () => {
    await expect(element(by.id('home-page'))).toBeVisible();
    await expect(element(by.text('Hello world'))).toBeVisible();
  });

  xit('should show toast after button tap', async () => {
    await element(by.text('PRESS ME')).tap();
    await waitFor(element(by.text('Awesome'))).toBeVisible().withTimeout(2000);
  });
});
