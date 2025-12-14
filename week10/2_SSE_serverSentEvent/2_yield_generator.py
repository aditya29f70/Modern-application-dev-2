# generator funciton (yield)

def num():
  return 1

# when we call this fn will will directly return 1

# but if we have something like

def num():
  yield 1
  yield 2

# yield lly like return but it don't stop return process instead 
# it remember at which  positional yield we have used (basically first we make it's instance which remember that thing)

# this is a instance
inst_1= num()

# print(next(inst_1)) # this next will run first yield
# # and when we use same instance with next will run next yield
# print(next(inst_1))

# # some things or run both yield using for loop

# for value in inst_1:
#   print(value)

# why this works bz inst_1 is generators (that number of generator that you have yield) 
# and the benifit of generator is it will run only when you call it other wise it will only take it functionality

# **range** also take generator like

def num(x):
  i=0
  while i<x:
    yield i 
    i+=1
  
for i in num(10):
  print(i)