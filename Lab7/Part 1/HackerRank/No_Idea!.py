# Enter your code here. Read input from STDIN. Print output to STDOUT

n, m = map(int, input().split())

array = input().split()

set_a = set(input().split())
set_b = set(input().split())

happiness = 0

for x in array:
    if x in set_a:
        happiness += 1
    elif x in set_b:
        happiness -= 1

print(happiness)