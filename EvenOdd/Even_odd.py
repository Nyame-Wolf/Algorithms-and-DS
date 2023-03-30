def lovefunc(flower1, flower2):
    '''
    Timmy & Sarah think they are in love, but around where they live, 
    they will only know once they pick a flower each. If one of the 
    flowers has an even number of petals and the other has an odd number 
    of petals it means they are in love.

    Write a function that will take the number of petals of each flower and 
    return true if they are in love and false if they aren't
    '''
    return (flower1 % 2 == 0 and flower2 % 2 == 1) or (flower2 % 2 == 0 and flower1 % 2 == 1)

# best solns


def lovefunc(flower1, flower2):
    return (flower1+flower2) % 2


def lovefunc(flower1, flower2):
    return flower1 % 2 != flower2 % 2


def lovefunc(flower1, flower2):
    return (flower1 + flower2) % 2 == 1

# tests
# @test.describe("Fixed Tests")
# def fixed_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(lovefunc(1,4), True)
#         test.assert_equals(lovefunc(2,2), False)
#         test.assert_equals(lovefunc(0,1), True)
#         test.assert_equals(lovefunc(0,0), False)
