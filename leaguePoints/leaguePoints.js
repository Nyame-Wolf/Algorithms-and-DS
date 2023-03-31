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
/*
explanation above:
This is an arrow function in JavaScript that calculates the total points for a 
team based on an array of games. The input g is an array of arrays, where each 
sub-array represents a game with the format [x, _, y], where x and y are the scores 
of the two teams and _ is a placeholder for some irrelevant information.

The reduce method is used to iterate through each game in the g array and accumulate 
the total points earned by the team. The reduce method takes two arguments: a callback 
function and an initial value for the accumulator.

The callback function takes two arguments: the accumulator a and the current game array [x, _, y]. 
The expression (x > y ? 3 : x == y) evaluates to either 3 (if the team won), 1 (if the game was a tie), 
or 0 (if the team lost), depending on the comparison of the scores x and y. The accumulator a is updated 
with the points earned in the current game and returned to be used as the accumulator for the next iteration.

The initial value for the accumulator is 0, which means that the points earned in the first game are added 
to 0 to start with. The final value of the accumulator is returned as the total points earned by the team.

So, a is the accumulator variable that keeps track of the total points earned by the team as the reduce method 
iterates through the games array.

In the code const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0), the expression x == y 
evaluates to true if the game is a draw (i.e., both teams have the same number of points) and false otherwise.

In JavaScript, true is coerced to 1 and false is coerced to 0 when used in a numeric context such as addition. 
Therefore, when x == y is true, it adds 1 to the accumulator a, which is the score for a draw.
*/

points = (g) =>
  g.reduce((a, c) => a + (c[0] > c[2] ? 3 : c[0] < c[2] ? 0 : 1), 0);

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
