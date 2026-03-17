start = int(input())
end = int(input())
reminder = int(input())
divider = int(input())

for i in range(start, end + 1):
    if i % divider == reminder:
        print(i, end=" ")