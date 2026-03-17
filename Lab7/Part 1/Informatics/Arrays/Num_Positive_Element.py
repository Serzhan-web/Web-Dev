n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

count = 0
for i in range(0, n):
    if a[i] > 0:
        count += 1

print(count)