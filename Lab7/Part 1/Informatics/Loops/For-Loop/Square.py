import math

start = int(input())
end = int(input()) 

for i in range(start, end + 1):
    if math.sqrt(i) % 1 == 0:
        print(i, end=" ")