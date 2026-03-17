def centered_average(nums):
    sum_val = sum(nums)
    min_val = min(nums)
    max_val = max(nums)
    
    result = (sum_val - min_val - max_val) // (len(nums) - 2)
    return result