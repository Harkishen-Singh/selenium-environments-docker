const faker = require('faker');
var domainsList = [];

(function domain() {
    for(var i=0; i< 100; i++) {
        domainsList.push(faker.internet.domainName());
    }
})();

module.exports = faker.internet.domainName();