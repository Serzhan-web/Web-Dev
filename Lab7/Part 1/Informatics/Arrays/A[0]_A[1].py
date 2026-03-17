n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

for i in range(0, n, 2):
    print(a[i], end=" ")