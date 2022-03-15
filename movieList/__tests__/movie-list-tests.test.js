const {Builder, Capabilities} = require("selenium-webdriver");

const {movieFunction} = require('../functions/movieFunctions');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

test('Adds a movie to list', async () => {
    await movieFunction(driver)

    await driver.sleep(5000)
});