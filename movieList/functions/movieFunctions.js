const {By} = require('selenium-webdriver');

const movieFunction = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Spirited Away')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()
    
    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
}

module.exports = {
    movieFunction
}