def sum67(nums):
    total = 0
    skip = False
    
    for n in nums:
        if n == 6:
            skip = True
        
        if not skip:
            total = total + n
            
        if n == 7 and skip:
            skip = False
            
    return total