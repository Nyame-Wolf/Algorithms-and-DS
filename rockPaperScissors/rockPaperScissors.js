const rps = (p1, p2) => {
  /*Let's play! You have to return which player won! In case of a draw 
return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  } else if (
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'rock' && p1 === 'scissors') ||
    (p2 === 'paper' && p1 === 'rock')
  ) {
    return 'Player 2 won!';
  } else {
    return 'Draw!';
  }
};

//best solns
const rp = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

const rs = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};

const ps = (p1, p2) => {
  var map = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};

rps = (a, b) =>
  a == b ? 'Draw!' : `Player ${/rp|ps|sr/.test(a[0] + b[0]) ? 2 : 1} won!`;
// tests
/*
const Test = require('@codewars/test-compat');

describe('rock paper scissors', function() {
  const getMsg = (n) => `Player ${n} won!`;

  it('player 1 win', function() {
    Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
    Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
    Test.assertEquals(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function() {
    Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
    Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
    Test.assertEquals(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function() {
    Test.assertEquals(rps('rock', 'rock'), 'Draw!');
    Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
    Test.assertEquals(rps('paper', 'paper'), 'Draw!');
  });
});
*/
