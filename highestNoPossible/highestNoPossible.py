def descending_order(num):
    ''' takes any non-negative integer as an argument and return it with 
    its digits in descending order. Essentially, rearrange the digits to 
    create the highest possible number. '''
    l = list(str(num))
    sorted_l = sorted(l, key=lambda x: int(x), reverse=True)
    return int(''.join(sorted_l))

# best soln:


def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))

# tests
# try:
#     from solution import Descending_Order as descending_order
# except ImportError:
#     from solution import descending_order

# @test.describe("Fixed Tests")
# def fixed_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(descending_order(0), 0)
#         test.assert_equals(descending_order(15), 51)
    test.assert_equals(descending_order(123456789), 987654321)
