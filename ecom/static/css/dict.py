dic = [{'x':'10', 'y':'20','z':'3.33'}, {'pi':'3.14','q':'1.14'}, {'m':'3.14','l':'1.14'}]
for a in dic:
    for i in a:
        if '.' in a[i]:
            a[i] = float(a[i])
        else:
            a[i] = int(a[i])


print(dic)   



    
        

