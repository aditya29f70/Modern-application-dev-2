#Modern application develpment 2 theory work

- js is used mostly for frontend

- all the browser already has tools required to run js
- Node.js another envirement where you can run your js or ( run js on machine(node.js))

#and both are called runtimes( a env where js can run)

- inside the runtimes we have **engine**(process code line by line) here we don't have **URL**, but in runtime env we have URL that what we try to say that runtime has extra feature also
  --> so **console.log()** --> is api's we help us to print thing on console
  --> lly we have **document obj** which allows us to access the web page where the browser is currently running -> this only available in the browser env -> it is not available in the node.js env

#also we have diff engine to js script run --> tipically we use v8 -> chrome use this engine, node.js, spidermonkey, firefox

#######js language

- interpreted -> exicute line by line ;;; oposite of interpreted(compiled) -> whole code
- weakly typed;
- opposite ; strong-typed;

**JIT** -> just in time compilatioin <--js

1. why js is created ?
   -> mostly for frontend

js language;
interpreted -> line by line, opposite: compiled -> whole code

weakly typed (forgiving in type convers) like if initilaly we say that a= 10 (int ) then after if i tell that a='ram' (str) so it will allow me that i can do this -> vs opposite-> strongly typed ( can't change the type of varible)

diff

dynamically typed(eg, python, js) -> (we don't have to explicitly menstion the type of data which will be stored in variable before initilise ) eg. a=10, vs opposite: static typed -> have to explicitly menstion the type of data which is gone to put in varibale eg. (in jave) int a=10

## some js has some jargons (lot ambiguity) eg

in python
x= 10, y= '60'
print(x+y) --> error

but in js
console.log(x+y) --> 1060 <-- int

lly if
in js

console.log(x\*y) -> 600 <-- int

open the devtool --> shortcut -> ctrl + shift+ i

or manullay go to selting on browser -> more tools -> dev tool

note: each line of code terminate with help of -> ';'
