N = int(input())

square = 0
while N >= 2 ** square:
    print(2 ** square)
    square += 1