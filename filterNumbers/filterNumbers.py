# create a function that takes a list of non-negative integers and
# strings and returns a new list with the strings filtered out
def filter_list(l):
    '''takes a list of non-negative integers and
 strings and returns a new list with the strings filtered out'''
    arr = []
    for i in l:
        if type(i) == int:
            arr.append(i)
    return arr

# comprehesion


def filter_list(l):
    return [i for i in l if type(i) == int]


print(filter_list([1, 2, 'a', 'b']) == [1, 2])
print(filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15])
print(filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123])

# tests
# describe('Sample tests')
# def sample_tests():
#     @test.it('should work for basic examples')
#     def basic_examples():
#         test.assert_equals(filter_list([1, 2, 'a', 'b']), [1, 2], 'For input [1, 2, "a", "b"]')
#         test.assert_equals(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15], 'Fot input [1, "a", "b", 0, 15]')
#         test.assert_equals(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123], 'For input [1, 2, "aasf", "1", "123", 123]')
