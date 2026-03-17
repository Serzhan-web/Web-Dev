n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

count = 0
for i in range(1, n):
    if a[i] > a[i-1]:
        count += 1

print(count)