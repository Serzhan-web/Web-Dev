def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i = i + 2
            continue
        total = total + nums[i]
        i = i + 1
    return total