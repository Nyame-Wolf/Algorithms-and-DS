def find_it(seq):
    '''Given an array of integers, find the one that appears an odd number
   of times. There will always be only one integer that appears an odd 
   number of times.
    '''
    dict = {}
    for i in seq:
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1

    for key, val in dict.items():
        if val % 2 == 1:
            return key
    return None

# best solns


def find_it(seq):
    return [x for x in seq if seq.count(x) % 2][0]


def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i
# tests
# import codewars_test as test
# from solution import find_it

# @test.describe("Sample tests")
# def sample_tests():

#     @test.it("find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should return 5 (because it appears 3 times)")
#     def _():
#         test.assert_equals(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5)

#     @test.it("find_it([1,1,2,-2,5,2,4,4,-1,-2,5]) should return -1 (because it appears 1 time)")
#     def _():
#         test.assert_equals(find_it([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);

#     @test.it("find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]) should return 5 (because it appears 3 times)")
#     def _():
#         test.assert_equals(find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);

#     @test.it("find_it([10]) should return 10 (because it appears 1 time)")
#     def _():
#         test.assert_equals(find_it([10]), 10);

#     @test.it("find_it([10, 10, 10]) should return 10 (because it appears 3 times)")
#     def _():
#         test.assert_equals(find_it([10, 10, 10]), 10);

#     @test.it("find_it([1,1,1,1,1,1,10,1,1,1,1]) should return 10 (because it appears 1 time)")
#     def _():
#         test.assert_equals(find_it([1,1,1,1,1,1,10,1,1,1,1]), 10);

#     @test.it("find_it([5,4,3,2,1,5,4,3,2,10,10]) should return 1 (because it appears 1 time)")
#     def _():
#         test.assert_equals(find_it([5,4,3,2,1,5,4,3,2,10,10]), 1);
