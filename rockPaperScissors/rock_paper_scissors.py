def rps(p1, p2):
    '''Let's play! You have to return which player won! In case of a draw 
return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
'''
    if p1 == p2:
        return "Draw!"
    map = {"scissors": "paper", "rock": "scissors", "paper": "rock"}
    if p2 == map[p1]:
        return "Player 1 won!"
    else:
        return "Player 2 won!"

# best solns


def rps(p1, p2):
    beats = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}
    if beats[p1] == p2:
        return "Player 1 won!"
    if beats[p2] == p1:
        return "Player 2 won!"
    return "Draw!"


def rps(p1, p2):
    hand = {'rock': 0, 'paper': 1, 'scissors': 2}
    results = ['Draw!', 'Player 1 won!', 'Player 2 won!']
    return results[hand[p1] - hand[p2]]


def rps(a, b): return ['Draw!', 'Player 1 won!', 'Player 2 won!'][(
    'srp'.index(a[0]) - 'srp'.index(b[0])) % 3]

# test
# import codewars_test as test
# from solution import rps

# @test.describe("rock paper scissors")
# def basic_tests():
#     @test.it("Player 1 wins")
#     def player_1():
#         test.assert_equals(rps('rock', 'scissors'), "Player 1 won!")
#     @test.it("Player 1 wins")
#     def player_1():
#         test.assert_equals(rps('scissors', 'rock'), "Player 2 won!")
#     @test.it("Draw")
#     def draw():
#         test.assert_equals(rps('rock', 'rock'), 'Draw!')
