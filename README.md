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

## variable declaration -> (let, const) more similar, var order way to define variable

let first talk about var , in the basis of (scope, mutlability)

var x=10; (quest where is fn scope -> funcation scoped(if you declare it inside the fn you can't use it outside the fn (gloablly)))

- and also mutable (like var v=5; then i can change it's value v= 10)

note ; gloabally scope means if you declare it inside or ouside the fn it will be not give any not same variable (not give error)

all the declarer variable are gloable if those are declare outside the fn

var y=20; <-- global
let y=2 <-- ,,
const y=4 <--,,

## now see how 'let' and 'const' treat as scope

--> comes under similar things
--> blocked scoped
--> let -> mutalble; const -> inmuatable

note; console.clear of clear all the things

# we are gonna see what is block '{}' is ;

but if you declare a variable through var inside and out side the block will be running both console log

- if any variable is block scoped it is also functional scope

- finally; let and const are block scoped or do care about block, but var does't

- so don't use var in block (due to it block scoped)

##### coming up the more import question that get asked in the interview

first i have login the variable which i haven't initilise
second i declare the variable
third console.log

console.log(v_var)
var v_var= 'himesh';
console.log(v_var)

-->we get undefined response -> this is the downside of using 'var'

--> specially what var is here;intilises the value of undefine even before it has been given some value -> so first one value is undefine and second one has 20

## now let know how this hosting happens

-> question comes like -> what is 'hosting' -> moving the variable declarasion at top of the scope

## js is interpreted(line by line) or jit (just in time compliation)

let we define
var a;
a=10;
var b= 20;
function abc(){
var c= 30;
var d= 40;
}

--> what happens here we have memory allocation phase (each variable or fn which have defined will be 'allocated' at actual memory note;(it will only allocating varibale not assign(come in execution phase))); -> execution phase

--> see the 1image for how memory allocation and execution phase happen in 'var' variable

--> note; anyevery time you define excution context it also create this variable word --> 'this'

#### lly we will see execution context for let and const

-> here the diff come for let, const and var -> althroug allocation phase already happens, but they are not define the values (very variable not define the values they are kept in the backet called 'temporal dead jone') for let and const; TDJ (it's like a space where js know these variable are there but haven't been assign any value); TDJ -> no value gets intialized;

scope means; where it's acceptible
what is ''hasting'' -> initialising the var declaration variable on top of it's scope

- so all the variable are gotten hosted in there place like let and const are hosted in TDZ and var is hosted in fn scope and fn is hosted in gloabally memory allocation (diff let and const are not accessible)

## now run actual js code in index.html, script tag
