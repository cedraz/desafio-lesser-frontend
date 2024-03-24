import { expect, test } from '@playwright/test';

test('challenge iniciated', async ({ page }) => {
	test.setTimeout(50000) 
    await page.goto('http://localhost:5173');

	// Preenchendo as informações e iniciando o desafio
    await expect(page).toHaveTitle('Desafio Lesser');

	await page.waitForSelector('#user-name');
	await page.click('id=user-name')
	await page.locator('[id="user-name"]').fill('Ícaro Cedraz')
	
	await page.click('id=emailInput')
	await page.locator('[id="emailInput"]').fill('cedrazicaro@gmail.com')

	await page.click('id=phoneInput')
	await page.locator('[id="phoneInput"]').fill('71999990000')

	await new Promise(resolve => setTimeout(resolve, 3000));

    await page.click('id=submitButton')

	// Página do desafio
	await expect(page).toHaveTitle('Página do Desafio');

	await new Promise(resolve => setTimeout(resolve, 3000));

	await page.click('id=finish-challenge')
	
	await new Promise(resolve => setTimeout(resolve, 2000));

	await page.click('id=close-modal')

	await new Promise(resolve => setTimeout(resolve, 2000));
	
	await page.waitForSelector('#candidate-page');
	await page.click('id=candidate-page')

	// Página do candidato
	await expect(page).toHaveTitle('Página do Candidato');

	await new Promise(resolve => setTimeout(resolve, 2000));
	
	await page.waitForSelector('#challenge-page');
	await page.click('id=challenge-page')
	
	await new Promise(resolve => setTimeout(resolve, 2000));
	
	// Reiniciando o desafio
	await page.click('id=restart-challenge')

	// Preenchendo as informações e iniciando o desafio
	await expect(page).toHaveTitle('Desafio Lesser');

	await page.waitForSelector('#user-name');
	await page.click('id=user-name')
	await page.locator('[id="user-name"]').fill('John')
	
	await page.click('id=emailInput')
	await page.locator('[id="emailInput"]').fill('asiabgkob@gmail.com')

	await page.click('id=phoneInput')
	await page.locator('[id="phoneInput"]').fill('71999990000')

	await new Promise(resolve => setTimeout(resolve, 2000));

	await page.click('id=submitButton')

	await expect(page).toHaveTitle('Página do Desafio');

	await new Promise(resolve => setTimeout(resolve, 15000));

	await page.pause()
});
