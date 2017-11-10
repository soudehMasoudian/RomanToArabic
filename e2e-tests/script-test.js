import {fromRoman} from 'controllers/script-from-roman.js';
import {assert} from 'chai';

describe("Roman numbers", function() {

    it("should return 1 for I", function() {
        assert.equal(fromRoman('I'), 1);
    });

    it("should return 1234 MCCXXXIV", function() {
        assert.equal(fromRoman('MCCXXXIV'), 1234);
    });

});
