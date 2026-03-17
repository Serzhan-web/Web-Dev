n = int(input())
all_data = input().split()
a = []

for s in all_data:
    a.append(int(s))

flag = False
for i in range(1, n-1):
    if a[i] * a[i+1] > 0:
        flag = True
        break

if flag:
    print("YES")
else:
    print("NO")