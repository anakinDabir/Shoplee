num = 1245678
x = set([int(a) for a in str(num)])
print(x)
for i in range(0,9):
    if i not in x:
        print(i)
    
