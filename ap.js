const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  });
});

function well(x) {
  let count = 0;

  for (let item of x) {
    if (item === 'good') {
      count++;
    }
  }

  if (count === 0) {
    return 'Fail!';
  } else if (count <= 2) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
}
