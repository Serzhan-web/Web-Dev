def min4(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m
    
num1, num2, num3, num4 = map(int, input().split())
print(min4(num1, num2, num3, num4))