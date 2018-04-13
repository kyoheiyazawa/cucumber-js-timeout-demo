const {Before, After} = require('cucumber');

Before(async function (scenario) {
    console.log('before hook');
});

After(async function ({result = {}, status}) {
	console.log('after hook');
});