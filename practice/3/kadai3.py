def expone(n,x):
    if x == 0:
        return n
    else:
        return expone(n+x*x,x-1)

print(expone(0,100))
