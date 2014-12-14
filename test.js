/**
 * Module dependencies
 */
var assert = require('assert');
var regex = require('./');

/**
 * Test
 */
describe('utc regex', function() {
  it('should match iso input', function() {
    assert.equal(regex().test('2011-10-05T14:48:00.000Z'), true);
  });

  it('should expose match groups', function() {
    var match = regex().exec('2011-10-05T14:48:00.000Z');
    assert.equal(match[0], '2011-10-05T14:48:00.000Z');
    assert.equal(match[1], '2011');
    assert.equal(match[2], '10');
    assert.equal(match[3], '05');
    assert.equal(match[4], '14:48:00');
    assert.equal(match[5], '14');
    assert.equal(match[6], '48');
    assert.equal(match[7], '00');
    assert.equal(match[8], '000');
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('201-10-05T14:48:00.000Z'), false);
    assert.equal(regex().test('2011-10-05T14:48:00.00Z'), false);
  });
});
