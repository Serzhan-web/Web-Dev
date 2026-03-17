n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

for i in range(0, n):
    if a[i] % 2 == 0:
        print(a[i], end=" ")