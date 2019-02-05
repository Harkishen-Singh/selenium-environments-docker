const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    assert = require('assert'),
    firefox = require('selenium-webdriver/firefox');
    { describe, it, after, before } require('selenium-webdriver/testing')
require('chromedriver');
require('geckodriver');

var options = new chrome.Options();
options.addArguments("headless");

let driver;

describe('Test Execution in Chrome Environments', function() {
    this.timeout(21000);

    describe('Creating browser instances', () => {
        it('launching chrome instance', (done) => {
            driver = new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();
            driver.then(() => {
                done();
            });
        });
    });

    describe('Google Home Page tests', function() {
        this.timeout(20000);

        it('Opening google.co.in page in headless browser', (done) => {
            driver.get('http://www.google.co.in').then(() => {
                done();
            });
        });

        it('Quering Search words', function(done){
            driver.findElements(By.xpath('//*[@id="tsf"]/div[2]/div/div[1]/div/div[1]/input')).then(r => {
                console.warn('r is '+ r);
                console.warn(r)
                r[0].sendKeys('harkishensingh github')
                assert.notEqual(r.length, 0, "received result does not exist");
                done();
            });
        });

        it('Post Query / results', (done) => {
            driver.findElement(By.xpath('//*[@id="tsf"]/div[2]/div/div[3]/center/input[1]')).click().then(rr => {
                driver.sleep(5000);
                driver.findElement(By.className('LC20lb')).then(elements => {
                    console.warn('web structure below');
                    console.warn(elements);
                    driver.quit();
                    done();
                });
            });
        });
    });
});

