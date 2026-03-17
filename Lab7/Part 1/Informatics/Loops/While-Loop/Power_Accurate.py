N = int(input())

square = 0
while N >= 2 ** square:
    if N == 2 ** square:
        print("YES")
        break
    square += 1
else:
    print("NO")