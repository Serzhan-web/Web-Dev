x = input()
reversed = ""

for i in range(len(x) - 1, -1, -1):
    reversed += x[i]

result = int(reversed)
print(result)