def mergeSort(arr):
    if len(arr) < 2:
        return arr
    mid_index = len(arr)//2
    left_arr = arr[:mid_index]
    right_arr = arr[mid_index:]
    return merge(mergeSort(left_arr), mergeSort(right_arr))


def merge(left_arr, right_arr):
    result_arr = []
    left_index = 0
    right_index = 0
    while left_index < len(left_arr) and right_index < len(right_arr):
        if left_arr[left_index] < right_arr[right_index]:
            result_arr.append(left_arr[left_index])
            left_index += 1
        else:
            result_arr.append(right_arr[right_index])
            right_index += 1
    result_arr += left_arr[left_index:]
    result_arr += right_arr[right_index:]
    return result_arr


print(mergeSort([6, 1, 23, 3, 0]))
