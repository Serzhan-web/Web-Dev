N = int(input())

divider = 2
while N >= divider:
    if N % divider == 0:
        print(divider)
        break
    divider += 1