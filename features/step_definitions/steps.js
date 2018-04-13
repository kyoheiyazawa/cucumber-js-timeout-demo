const {When} = require('cucumber');
const Promise = require('bluebird');

When(/^the step slightly times out$/, async function () {
    console.log('this process will exit');
    await Promise.delay(6000);
});

When(/^the step times out bigtime$/, async function () {
    console.log('this process will hang for a long time');
    await Promise.delay(999999999);
});
