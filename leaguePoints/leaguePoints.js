function points(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    if (Number(games[i][0]) > Number(games[i][2])) {
      points += 3;
    } else if (Number(games[i][0]) === Number(games[i][2])) {
      points += 1;
    }
  }
  return points;
}

// alternative solns:
let points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

let points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);

//test
/*
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function(){
  it("Sample Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});
  */
