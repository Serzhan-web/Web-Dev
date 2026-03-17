def max_end3(nums):
    res = nums[0]
    if nums[2] > res:
        res = nums[2]
    
    return [res, res, res]