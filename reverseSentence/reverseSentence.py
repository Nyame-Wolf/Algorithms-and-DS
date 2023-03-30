def reverse_words(text):
    reversed = text.split(" ")
    arr = []
    for i in reversed:
        arr.append(i[::-1])
    joined = " ".join(arr)
    return joined

# best soln: comprehension


def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))
