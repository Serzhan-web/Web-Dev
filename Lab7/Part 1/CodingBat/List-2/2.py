def big_diff(nums):
    res_min = nums[0]
    res_max = nums[0]
    
    for n in nums:
        res_min = min(res_min, n)
        res_max = max(res_max, n)
        
    return res_max - res_min