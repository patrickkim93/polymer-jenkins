var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
 'browserName' : 'iPhone',
 'device' : 'iPhone 8',
 'realMobile' : 'true',
 'os_version' : '11.0',
 'browserstack.user' : 'marcusweaver1',
 'browserstack.key' : 'aLzzZyn6uN5XqKZzbs4y',
 'browserstack.localIdentifier': ''
}


var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();