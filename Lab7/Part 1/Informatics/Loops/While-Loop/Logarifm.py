N = int(input())

square = 0
while N > 2 ** square:
    square += 1

print(square)