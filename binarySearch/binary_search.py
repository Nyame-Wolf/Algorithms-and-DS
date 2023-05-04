def binary_search(arr, target, start=0, end=None):
    if end == None:
        end = len(arr) - 1
    if start > end:
        return False
    mid_index = (start + end)//2

    if arr[mid_index] == target:
        return True
    elif arr[mid_index] > target:
        return binary_search(arr, target, start, mid_index-1)
    else:
        return binary_search(arr, target, mid_index+1, end)


arr = [1, 2, 3, 4, 5, 6, 7, 8]
print(binary_search(arr, 7))
