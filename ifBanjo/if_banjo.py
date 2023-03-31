def are_you_playing_banjo(name):
    '''
    Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

        name + " plays banjo" 
        name + " does not play banjo"
        Names given are always valid strings.
    '''
    if name[0].upper() == 'R':
        return f'{name} plays banjo'
    else:
        return f'{name} does not play banjo'

# alternantive solns


def areYouPlayingBanjo(name):
    return name + (' plays' if name[0].lower() == 'r' else ' does not play') + " banjo"


def areYouPlayingBanjo(name):
    return '{} {}'.format(name, 'plays banjo' if name.startswith('R') or name.startswith('r') else 'does not play banjo')

# tests
# import codewars_test as test

# try:
#     from solution import areYouPlayingBanjo as are_you_playing_banjo
# except ImportError:
#     from solution import are_you_playing_banjo

# @test.describe("Fixed Tests")
# def basic_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(are_you_playing_banjo("martin"), "martin does not play banjo");
#         test.assert_equals(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
#         test.assert_equals(are_you_playing_banjo("bravo"), "bravo does not play banjo")
#         test.assert_equals(are_you_playing_banjo("rolf"), "rolf plays banjo")
