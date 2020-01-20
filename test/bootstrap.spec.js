var assert = require('assert');

describe('Bootstrap', function () {

    it('Booting the bootstrap file.', function () {
        try {
            require("../src/bootstrap");
        } catch (error) {
            assert.fail("There was no successful bootstrap file request.");
        }
    });

    it('Checking if in the global was to create the variable app.', function () {
        assert.equal(typeof global.app === 'undefined' ? true : false, false);
    });
});