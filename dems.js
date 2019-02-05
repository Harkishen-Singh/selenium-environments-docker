const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    firefox = require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

var options = new chrome.Options();
options.addArguments("headless")
// options.addArguments("remote-debugging-port="+0)

var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();

driver.get('http://www.google.co.in');
driver.findElements(By.id('prm-pt')).then((req) => {
    console.warn(req)
    console.warn(req.length)
    if (req.length===0)
        throw new Error('element not found')
    req.forEach(item => {
        item.getText().then(t => {
            console.warn(t)
        })
    })
}).catch(e => {
    throw e;
})