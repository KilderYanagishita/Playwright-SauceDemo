// @ts-check
const { test, expect } = require('@playwright/test');
const { before } = require('node:test');

//variáveis
const username = '[data-test="username"]';
const password = '[data-test="password"]';
const btn_login = '[data-test="login-button"]';
const sauce_labs_backpack = '[data-test="item-4-title-link"]';
const btn_add_carrinho = '[data-test="add-to-cart"]';
const btn_carrinho = '[data-test="shopping-cart-link"]';
const btn_Checkout = '[data-test="checkout"]';

test.beforeEach('Login com sucesso', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Login com sucesso', async ({ page }) => {
    await page.locator(username).click();
    await page.locator(username).fill('standard_user');
    await page.locator(password).click();
    await page.locator(password).fill('secret_sauce');
    await page.locator(btn_login).click();
    await page.waitForSelector('[data-test="title"]', { state: 'visible', timeout: 5000 });
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
});
test('Compra com sucesso', async ({ page }) => {
    await page.locator(username).click();
    await page.locator(username).fill('standard_user');
    await page.locator(password).click();
    await page.locator(password).fill('secret_sauce');
    await page.locator(btn_login).click();
    await page.waitForSelector('[data-test="title"]', { state: 'visible', timeout: 5000 });
    await page.locator(sauce_labs_backpack).click();
    await page.locator(btn_add_carrinho).click();
    await page.locator(btn_carrinho).click();
    await page.locator(btn_Checkout).click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('teste');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('teste');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('99999999');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.screenshot({ path: 'screenshot/screenshot2.png' });
    await page.locator('[data-test="back-to-products"]').click();

});
test('Retirar produto do carrinho', async ({ page }) => {
    await page.locator(username).click();
    await page.locator(username).fill('standard_user');
    await page.locator(password).click();
    await page.locator(password).fill('secret_sauce');
    await page.locator(btn_login).click();
    await page.waitForSelector('[data-test="title"]', { state: 'visible', timeout: 5000 });
    await page.locator(sauce_labs_backpack).click();
    await page.locator(btn_add_carrinho).click();
    await page.locator(btn_carrinho).click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.screenshot({ path: 'screenshot/screenshot3.png' });
    await page.locator('[data-test="inventory-sidebar-link"]').click();
    
});
test('Login errado', async ({ page }) => {
    await page.locator(username).click();
    await page.locator(username).fill('standard_user');
    await page.locator(password).click();
    await page.locator(password).fill('secret_sauc');
    await page.locator(btn_login).click();
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
});
test('Validar botão linkedin', async ({ page }) => {
    await page.locator(username).click();
    await page.locator(username).fill('standard_user');
    await page.locator(password).click();
    await page.locator(password).fill('secret_sauce');
    await page.locator(btn_login).click();
    const texto = await page.waitForSelector('text=Privacy Policy')
    await texto.scrollIntoViewIfNeeded()
    await page.screenshot({ path: 'screenshot/screenshot1.png' });

});
