n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

for i in range(n-1, -1, -1):
    print(a[i], end=' ')