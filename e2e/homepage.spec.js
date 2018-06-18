describe('App component', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have home page', async () => {
        await expect(element(by.id('home-page'))).toBeVisible();
        await expect(element(by.text('Hello world'))).toBeVisible();
    });

    xit('should show hello screen after tap', async () => {
        await element(by.id('hello_button')).tap();
        await expect(element(by.text('Hello!!!'))).toBeVisible();
    });

    xit('should show world screen after tap', async () => {
        await element(by.id('world_button')).tap();
        await expect(element(by.text('World!!!'))).toBeVisible();
    });
});
