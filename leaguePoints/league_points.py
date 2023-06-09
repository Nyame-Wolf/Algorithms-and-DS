
def points(games):
    '''
    Our football team has finished the championship.
    Our team's match results are recorded in a collection of strings. Each match is 
    represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
    For example: ["3:1", "2:2", "0:1", ...] Points are awarded for each match as follows:
        if x > y: 3 points (win)
        if x < y: 0 points (loss)
        if x = y: 1 point (tie)
    We need to write a function that takes this collection and returns the number of 
    points our team (x) got in the championship by the rules given above.
    Notes:
        our team always plays 10 matches in the championship
        0 <= x <= 4
        0 <= y <= 4
    '''
    points = 0
    for i, item in enumerate(games):
        if int(games[i][0]) > int(games[i][2]):
            points += 3
        elif int(games[i][0]) == int(games[i][2]):
            points += 1
        else:
            pass
    return points

# alternate answers


def points(a):
    return sum((x >= y) + 2 * (x > y) for x, y in (s.split(":") for s in a))


def points(games):
    result = 0
    for item in games:
        result += 3 if item[0] > item[2] else 0
        result += 1 if item[0] == item[2] else 0
    return result


def points(games):
    return sum([0, 1, 3][1+(g[0] > g[2])-(g[0] < g[2])] for g in games)


'''
Explanation above
The mathematical expression 1+(g[0] > g[2])-(g[0] < g[2]) is used to calculate 
the number of points that a team earns in a single game. Here's how it works:

g[0] represents the score of the first team in a game.
g[2] represents the score of the second team in a game.
g[0] > g[2] returns True if the first team won the game (i.e. if their score is 
    greater than the second team's score), otherwise it returns False.
g[0] < g[2] returns True if the first team lost the game (i.e. if their score is 
    less than the second team's score), otherwise it returns False.
(g[0] > g[2])-(g[0] < g[2]) calculates the difference between the two Boolean values. 
If the first team won, this expression evaluates to 1. If the first team lost, it evaluates to -1. 
If the game was a tie, it evaluates to 0.
1+(g[0] > g[2])-(g[0] < g[2]) adds 1 to the result of the previous expression, so that the minimum value 
that can be returned is 1. This gives us the number of points earned by the first team in the game.
By using this expression inside a list comprehension, the code creates a list of points earned by 
the first team in each game. Finally, the sum() function is used to add up all the points in the list and 
return the total number of points earned by the first team across all games.
'''


def points(games):
    return sum(3 if x > y else 0 if x < y else 1 for x, y in (score.split(":") for score in games))

# tests
# import codewars_test as test
# from solution import points

# @test.describe("Fixed Tests")
# def fixed_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']), 30)
#         test.assert_equals(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']), 10)
#         test.assert_equals(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']), 0)
#         test.assert_equals(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']), 15)
#         test.assert_equals(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']), 12)
