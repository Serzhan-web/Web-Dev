n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

counter = 0
for i in range(1, n-1):
    if a[i] > a[i+1] and a[i] > a[i-1]:
        counter += 1

print(counter)