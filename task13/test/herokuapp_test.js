require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
describe('Checkout herokuapp', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Elements active state', async function () {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        const firstElem = await driver.findElement(By.css('#dropdown > option:nth-child(1)')).getAttribute('disabled');
        const secondElem = await driver.findElement(By.css('#dropdown > option:nth-child(2)')).getAttribute('disabled');
        assert.strictEqual(firstElem, 'true');
        assert.strictEqual(secondElem, null);
    });

    it('Elements hover', async function () {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        const actions = driver.actions({ bridge: true });
        const elem = await driver.findElement(By.css('#content img'));
        await actions.move({ origin: elem, x: 0, y: 0 }).perform();
        const userName = await driver.findElement(By.css('.figcaption h5')).getText();
        assert.strictEqual(userName, 'name: user1');
    });

    it('Filling the form', async function () {
        await driver.get('http://formy-project.herokuapp.com/form');
        await driver.findElement(By.id('first-name')).sendKeys('Peter', Key.RETURN);
        await driver.findElement(By.id('last-name')).sendKeys('Peterson', Key.RETURN);
        await driver.findElement(By.id('job-title')).sendKeys('tester', Key.RETURN);
        await driver.findElement(By.id('radio-button-1')).click();
        await driver.findElement(By.id('checkbox-1')).click();
        await driver.findElement(By.id('select-menu')).click();
        await driver.findElement(By.css('option[value="2"]')).click();
        await driver.findElement(By.css('input#datepicker')).sendKeys('12/12/2020', Key.RETURN);
        await driver.findElement(By.css('.btn-primary')).click();
        await driver.manage().setTimeouts({ implicit: 2000 });
        const alert = await driver.findElement(By.css('.alert-success')).getText();
        assert.strictEqual(alert, 'The form was successfully submitted!');
    });

    it('Sorting the table', async function () {
        await driver.get('http://the-internet.herokuapp.com/tables');
        const table2 = await driver.findElement(By.css('table#table2'));
        await driver.executeScript("arguments[0].scrollIntoView()", table2);
        await driver.manage().setTimeouts({ implicit: 3000 });
        await table2.click();
        await driver.findElement(By.css('span.dues')).click();
        await driver.manage().setTimeouts({ implicit: 6000 });

        const dues = await driver.findElements(By.css('td.dues'))
        const itemNames = await Promise.all(dues.map(item => item.getText()))
        const sorted = [
            '$50.00',
            '$50.00',
            '$51.00',
            '$100.00'
        ]
        assert.deepStrictEqual(itemNames, sorted);
    });

    after(() => driver && driver.quit());
})