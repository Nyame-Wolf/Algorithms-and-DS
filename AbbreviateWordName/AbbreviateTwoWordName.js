function abbrevName(name) {
  let splitName = name.split(' ');
  return `${splitName[0][0]}.${splitName[1][0]}`.toUpperCase();
}

// alternative solns
const abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();

function abbrevName(name) {
  return name
    .split(' ')
    .map((x) => x.substr(0, 1).toUpperCase())
    .join('.');
}

// tests
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});

*/
