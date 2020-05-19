var number=5;// IN LINE COMMENT
/* this i
m u l ti
line comment
 end*/


/*DATATYPES
Undefined,null,boolean,string,symbol,number,and object

//Declaration
var a;
console.log(a)
//Declaration and assigned
var b=2;
a=7;
b=a;
console.log(a);
console.log(b);

//Intiliazation
var a=9;

//Unintialized
var a=5;
var b=10;
var c="i an string ";

a=a+1;
b=b+5;
c=c+"dude";
console.log(a);
console.log(b);
console.log(c);


//Case sensitive  Variable
//delaring variables
var studyAbf;
var propertyDeal;
var tITLEcover;

//Assignments

studyAbf=10;
propertyDeal="abhay"


//Operation on numbers
var sum = 10+10;
 console.log(sum);
var diff=45-33;
console.log(diff);
var pro=8*10;
console.log(pro);
var div =62/34;
console.log(div);
var div =62/0;
console.log(div);
 //increment and decrement
 var a=1;
 var b=4;
a++;
b--;
 console.log(a);
 console.log(b);

//Decimel number
var dec=5.78;
 var dea=0.004;
console.log(dec*dea);
   //SIMLILAR DIVIDE
//Remainder
 var rem;
 rem=11%3;
console.log(rem);

//compound assignment with augmented addition 18:22
//compound assignment with augmented subtraction 19:21
//compound assignment with augmented multiplication 20:20
//compound assignment with augmented division
var a=1;
var b=4;
a=a+12;
console.log(a)
a+=12
console.log(a)
b=9+b;                       //subtract is similar
console.log(b);
b+=9
console.log(b);
a*=5                      //multiply is similar
console.log(a);
a/=3;
console.log(a);

//declare string variables
var firstname ="abhay";
var lastname="singh";
console.log(firstname   +    lastname);

//escaping literal quotes in strings
//by using(\ - backslash)
var str="i am a \"double quoted \" string inside \"string\"";
console.log(str);


//quotinq strings with single quotes
//single quotes can be used('')

var mov='https://www.jiocinema.com/"watch/tv/bose"-dead-alive-hindi/1/1/1520432645052/0/0';
console.log(mov);
var mov1=`'https://www.jiocinema.com/"watch/tv/bose"-dead-alive-hindi/1/1/1520432645052/0/0'`
console.log(mov1);  // Using(``)
*/
/*
//escape sequences in strings
CODE     OUTPUT
\'       singlequote
\"       doublequote
\\        backslash
\n        new LINE
\r        carriage return
\t        tab
\b        backspace
\f        form feed
*/
/*
var str="first\n\t\\second line\nthird line";
console.log(str);

//concatenating string with plus operator
var ste="abhy singh "+"is good boy";
var str2="this is start and "+"this is end";
console.log(ste);
console.log(str2);

//concatenating string with variables
var str=" i come first ";
str +=" i come second.";
var ste="this one ";
ste +="second one.";
console.log(str);
console.log(ste);

// concatenating string with variables
var nam="abhay";
var name="my name is " + nam + " singh";
console.log(name);


//appending variables to strings
  //only use variable like
  var nam="abhay";
  var name="my name is " + nam + " singh ";
  name+=nam;
console.log(name);


//find a length of string
var str="bhaaaaaag"
var a=str.length
console.log(a);

//bracket notation to find first character in string
var str="bhaaaaaag"
var a=str[1];
console.log(a);

//bracket notation to find last character in string
var str="bhandhg"
var a=str[];
console.log(a);

//String Immutability
var str="bhaaaaaag";
str="challl" ;
console.log(str);

//bracket notation to find Nth character in string
var str="bhandhg"
var a=str[str.length-1];
console.log(a);


//word blanks
function gaana(sname,person,emot,song){
  var res="";
  res += sname + " " + "is " + person + " " + emot + " " + song + ".";
  return res;
}
console.log(gaana("Roses","my","fav","song"));
console.log(gaana('tik tok','shivam','fav','app'));

 //store multiple values with arrays
var arr=['Abhay','5','zor'];
console.log(arr);

//nested arrays--array in array
//access array data with indexes same as strings
//modify array data with indexes
var arr=['Abhay',5,'zor'];
arr[1]=45;
console.log(arr);

//access multi-dimensional arrays with indexes
var arr=[[2,6],[7,54,90],[[6,9,4,5],[67,87,65]]];
console.log(arr[0][1]);
console.log(arr[1][2]);
console.log(arr[2][0][2]);
console.log(arr[2][1][2]);

//manipulate arrays with push()
var arr=['Abhay',5,'zor'];
arr.push(["krib","opre",36]);
arr.push("xombie");
console.log(arr);

//manipulate arrays with pop()
var arr=[ 'Abhay', 5, 'zor', [ 'krib', 'opre', 36 ], 'xombie' ]
arr.pop(["krib","opre",36]);
arr.pop("xombie");
console.log(arr);
arr.pop();
console.log(arr);

//manipulate arrays with shift()
 var arr=[ 'Abhay', 5, 'zor', [ 'krib', 'opre', 36 ], 'xombie' ]
 var remarr=arr.shift();
 console.log(arr);
 console.log(remarr);

//manipulate arrays with unshift()
var arr=[ 5, 'zor', [ 'krib', 'opre', 36 ], 'xombie']
var remarr=arr.unshift("Abhay","zinta");
console.log(arr);
console.log(remarr);//now it will tell num of elements in array

//Shopping list
var mylist=[["biscuit",5],["toffee",10],["milk",4],["flour",3],["eggs",12],["juice",12]];
console.log(mylist);

// write reusable code with functions
function mera(){
  console.log("abhay");
}
mera();
mera();
mera();

//passing values to functions with arguments
function lelo(a,b){
  console.log(a-b);
}
lelo(10,5);

function chaman(a,b){
  console.log("chaman ho tum itni baar",a*b);
}
chaman(10,5);

//global scope and functions
var b=100;
function fuc1(){
  var a=10;//it is limited to this function only(local variable)
}          //it a is not declared with var then in browser it will become
           //global variable

function fuc2(){
  var output="";
  if ( typeof a != "undefined"){
    output+= "phli :" + a;
  }
  if( typeof b != "undefined"){
    output+= " doosri :" + b;
  }
  console.log(output);
  console.log(a);
}
fuc1();
fuc2();

 //Global vs Local scope and functions
 var outerwear="pyjama"

 function innerwear(){
   var outerwear="chaddi"

   return outerwear
 }
 console.log(innerwear())
 console.log(outerwear)

//return a value from function
 function add(num){
   return num+5;
 }
 console.log(add(5));

//understand undefined value returned from a function
var sum=0;
function add(){  //operatio would be done but no value ois returned
  sum=sum+3;
}

//assignment with a returned value
var changed=0;
function change(num){
  return num*5;
}
console.log(change(3));

//Stand in-line
//Implementing Queue
function mylist(arr,m){
  arr.push(m)
  return arr.shift();
}
 var arr=[1,2,3,4,5];
console.log("before :" + JSON.stringify(arr));
console.log(mylist(arr,6));
console.log("after :" + JSON.stringify(arr));


//boolean values
function welbool(){
  return FALSE: //can be true also
}

//use conditional logic with if statements

function funk(check){
  if(check){
    return "yeah ! that was true";
  }
  return "naa! that was false";
}
console.log(funk(true));

//comparison with the equality operator
function funk(check){
  if(check == 12){
    return "yeah ! that was equal";
  }
  return "naa! that wan't equal";
}
console.log(funk(10));
*/

//comparison with the strict equality operator

/* In this case we use three equals(===) because two equals comparison(==)
converts the operands to same type where as three equals  strictlluy
compare the values without changing the type

function compare1(a){
  if(a=='10'){
    return "equal";
  }
  return "not equal";
}
console.log(compare1(10));

function compare(a){
  if(a==='10'){
    return "equal";   //can also b used with inequality operator(!==)
  }                    //to check strict inequality
  return "not equal";
}
console.log(compare(10));

//comparison with greater than or equal to operator
//comparison with less than or equal to operator
function compare(a){
  if(a <=30){
    return "30 se equal";
  }
  if(a <=45){
    return "45 se equal";
  }

  return "not equal";
}
console.log(compare(10));


//comparison with the logical 'and' operator(&&)
function compare(a){
  if(a <=60 && a >=45){
    return "45 aur 60 k beech h";
  }

  return "not equal";
}
console.log(compare(20));


//comparison with the logical 'or' operator(&&)
function compare(a){
  if(a >=60 || a <=45){
    return "45 aur 60 k beech ki limit hatai h";
  }

  return "hat gayi";
}
console.log(compare(47));


//else statements
var res="";
function else_wala(a){
  if(a <=45){
    res= "45 se chota ya barabar";
  }else {
    res= "45 se bada";
  }
  return res;
}
console.log(else_wala(50));

//else statements
var res="";
function elseif_wala(a){
  if(a <=45){
    res= "45 se chota ya barabar";
  }else if(a >=80){
      res= "80 se bada ya barabar";
  }else {
    res= "beech m";
  }
  return res;
}
console.log(elseif_wala(10));
*/
/*logical order of if else statements-it follows sequential order if first
conditional is false then it will move to second condition if not then it will
terminate out at first condition.

//chaining if else statements
var res = " "
function chainelseif_wala(a){
  if(a < 5){
    res= "tiny";
  }else if(a<10){
      res= "small";
  }else if (a<15){
    res= "Medium";
  }else if(a<20){
      res= "large";
  }else{
    res='Huge';
  }
  return res;
}
console.log(chainelseif_wala(7));

//Golf CODE
var res= "";
var pos =["Hole-in-hole","Eagle","Birdie","par","boogey","Double boogey","GO home!"];
function golfscore(par , strokes){
  if(strokes == 1){
    res=pos[0];
  }else if(strokes <= par - 2){
    res=pos[1];
  }else if(strokes <= par -1){
    res=pos[2];
  }else if(strokes == par){
    res=pos[3];
  }else if(strokes == par + 1){
    res=pos[4];
  }else if(strokes == par + 2){
    res=pos[5];
  }else{
    res=pos[6];
  }
  return res;
}
console.log(golfscore(5,8));

//switch statement-
function switchwala(n){
  var ans = '';
  switch(n){
    case 1:
    ans ="aplha";
    break;
    case 2:
    ans ="beta";
    break;
    case 3:
    ans ="gamma";
    break;
    case 4:
    ans ="delta";
    break;
    default:
    ans = "stuff";
  }
  return ans;
}
console.log(switchwala('1'));


//multiple identical options in switch statements

function mul_option(n){
  var ans =" "
  switch(n){
    case 1:
    case 2:
    case 3:
      ans = " chota ";
      break;
    case 4:
    case 5:
    case 6:
      ans = " thik ";
      break;
    case 7:
    case 8:
    case 9:
        ans = " bada ";
        break;
    default:
     ans="dekh"
  }
  return ans;
}
console.log(mul_option(10));

//replacing if else chains with switch-just write value accordingly in case(here)

//returning boolean value form functions

function torf(a,b){
  return a < b ;
}
console.log(torf(10,16));
*/

/* SYNTAX FOR SQRT
     Math.sqrt(a) , Math.sqrt(b)
 for rounding the number
    Math.round(value)  */
/*
//returning an early pattern from functions
function square(a,b){
  if(a < 0 || b < 0){
    return undefined ;
  }
  return Math.round(Math.pow(a+b, 2));

}

console.log(square(2,2));

//Counting Cards

var count=0;
function countcard(n){
  switch(n){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
       count++;
       break;
    case 9:
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
       count--;
       break;
  }
  var holdb = "HOLD";
  if( count > 0){
    holdb = "BET";
  }
  return count + " " + holdb;
}
countcard(2);countcard('K');countcard(10);countcard('K');countcard('A');
console.log(countcard(4));
*/
//build javascript objects
/* this is a example of object.
var object_name ={
  property 1: entities
  property 2: entities
  property 3: entities
  property 4: entities
}; */
/*
//accessing object properties with dot notation
 var dressup ={
   rang : "kala",
   kapda : "tericit",
   button :5,
   baaki : []
 };

var a1 = dressup.rang;
console.log(a1);
console.log(dressup.kapda)


//accessing object properties with bracket notation
var dressup ={
  "shirt rang" : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : []
};

var a1 = dressup["shirt rang"];
console.log(a1);
console.log(dressup.kapda)

//accessing object properties with variables
var dressup ={
  19 : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : []
};

var a1 = 19;
console.log(dressup[a1]);
console.log(dressup.kapda)

//updating object properties
var dressup ={
  19 : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : []
};
dressup.kapda="cotton";
console.log(dressup.kapda)

//add new property to an object
var dressup ={
  19 : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : []
};

dressup['joota']='nike';
console.log(dressup.joota)

//delete properties form an object
var dressup ={
  19 : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : []
};
delete dressup.baaki;
console.log(dressup.baaki);

//using objects for lookups
//we can replace switch statement using objects
var res ='';
function dressup(n){
  switch(n) {
    case "rang" :
      res="kala";
    break;
    case "kapda" :
      res="cotton";
    break;
    case "button ussme" :
      res= 5;
    break;
    case "qty" :
      res= 100000;
    break;
  }
  return res;
}
console.log(dressup("rang"));
console.log(dressup("qty"));
console.log(dressup("button ussme"));


var dressup ={
  rang : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : [],
  qty : 100000
};
console.log(dressup.rang);
console.log(dressup.qty);
console.log(dressup["button ussme"]);

//testing objects for properties
var dressup ={
  rang : "kala",
  kapda: "tericit",
  "button ussme" :5,
  baaki : [],
  qty : 100000
};

function check(prop){
  if(dressup.hasOwnProperty(prop)){
    return dressup[prop] ;
  }else{
    return "nhi h bhai";
  }
}
console.log(check("ink"));


//manipulating complex objects
var dressup =[
  {
  "rang" : "kala",
  "kapda" : "tericit",
  "button ussme" :5,
  "baaki" : ["hight","wight","bredth"],
  "qty" : 100000
},
//another
{
"rang" : "peela",
"kapda" : "cotton",
"button ussme" :8,
"baaki" : ["40","50","80"],
"qty" : 30000
}
];
console.log(dressup);

//accessing nested objects
var phone ={
  "color" : "black",
  "size" : 7.2,
  "brand" :{
    "indian":{"big" : "L.G","small h":"lava"},
     "other":{"big":"apple","small":"vivo"}
        },
  "specs" : [],
  "qty" : 100000
};
var variant =phone.brand.indian["small h"];
console.log(variant);


//accessing nested arrays
var phone =[
  {
  "color" : "black",
  "size" : 7.2,
  "brand" :{
    "indian":{"big" : "L.G","small h":"lava"},
     "other":{"big":"apple","small":"vivo"}
        },
  "specs" : [],
  "qty" : 100000
},
{
"color" : "blue",
"size" : 6.2,
"brand" :{
  "american":{"big" : "apple","small h":"alcatel"},
   "other":{"big":"redmi","small":"vivo"}
      },
"specs" : ["l=6.0","b=3.23","h=0.23"],
"qty" : 10000
 }
];

var variant =phone[0].brand.indian["small h"];
var variant1 =phone[1].brand.american["small h"];
var variant2 =phone[1].specs[1];
console.log(variant);
console.log(variant1);
console.log(variant2);


//record collection-To maintain a copy javascript uses followinf function
// var variable_copy = JSON.parse(JSON.stringify(variable));
var phone ={
  "snq1" :  {
  "color" : "black",
  "size" : 7.2,
  "brand" : {
    "indian":{"big" : "L.G","small h":"lava"},
     "other":{"big":"apple","small":"vivo"}
        },
  "specs" : [],
  "qty" : 100000
},
 "snq2": {
"color" : "blue",
"size" : 6.2,
"brand" :{
  "american":{"big" : "apple","small h":"alcatel"},
   "other":{"big":"redmi","small":"vivo"}
      },
"specs" : ["l=6.0","b=3.23","h=0.23"],
"qty" : 50000
},
"snq3": {
"size" : 6.2,
"brand" :{
 "russian":{"big" : "kinton","small h":"alcatel"},
  "other":{"big":"redmi","small":"nokia"}
     },
"specs" : ["l=6.0","b=3.23","h=0.23"],
"qty" : 50000
}
};

var phone_copy = JSON.parse(JSON.stringify(phone));
var phone_copy = phone;

function updatephone(id , prop ,value){
    if(value === ""){
      delete phone[snq2][prop];
    }
    else if (prop === "specs"){
      phone[id][prop] = phone[id][prop] || [];
      phone[id][prop].push(value);
    } else
    {
      phone[id][prop] = value;
    }

  return phone;
}
console.log(phone);
console.log(updatephone("snq3" , "specs" , "sahi" ));


//iterate with while loop
var arr = [];
var i = 0;
while (i<5) {
  arr.push(i);
  i++;
}
console.log(arr);

//iterate with for loop
var arr = [];
var i = 0;
for(i=0;i<5;i++){
  arr.push(i);
}
console.log(arr);

//iterate odd numbers with a for loop
var arr = [];
var i = 0;
for(i=1;i<10;i+=2){
  arr.push(i);
}
console.log(arr);

//count backwards with a for loop --with decrement operator

// iterative through an array with for loop
var arr = [ 1, 3, 5, 7, 9 ];
var tot = 0;
for(var i=0;i<arr.length;i++){
  tot+=arr[i];
}
console.log(tot);


//nesting for loops
function mul (arr){
 var prod = 1;
 for(var i=0; i<arr.length; i++){
   for(var j=0; j<arr[i].length; j++){
     prod*=arr[i][j];
   }
 }
return prod;
}
var product = mul([[1,2],[3,4],[5,6,7]]);
console.log(product);


//nesting with do..while loops
var arr = [];
var i = 10;
do{
  arr.push(i);
  i++;
}while (i<5) ;
console.log(i,arr);



//profile lookup

var phone =[
  {
  "color" : "black",
  "size" : 7.2,
  "brand" : "vivo",
  "specs" : [],
  "prc" : 100000
},
{

"color" : "blue",
"size" : 6.2,
"brand" :"alcatel",
"specs" : ["l=6.512","b=3.23","h=0.23"],
"prc" : 80000
},
 {
"size" : 9.3,
"brand" :"nokia",
"specs" : ["l=19.89","b=3.23","h=4.23"],
"prc" : 30000
}
];

function profile(brand , prop){
  for(var i=0; i < phone.length ; i++){
    if(phone[i].brand === brand){
      return phone[i][prop] || "no such property available"
    }
  }
  return "no brand found!!";
}

var lookup = profile("nokia","color");
console.log(lookup);


//generate random fractions
console.log(Math.random());


//generate random whole numbers
console.log(Math.floor(Math.random()*20));


//generate random whole numbers within a range
function randomnum(max,min){
  return Math.floor(Math.random()*(max - min + 1)) + min ;
}
 var l = randomnum(10,20);
 console.log(l);

//use the parseInt functions
function convert(str){
  return parseInt(str);
}

var l = convert("45");
console.log(l);

//use the parseInt function with a radix
function convertradix(str){
  return parseInt(str,2);
}

var l = convertradix(10110000000);
console.log(l);

//use the conditional(ternary) operator\
//Syntax=- condition ? statement if true : statementif false
// spacebaer + ctrl = changeable options like(false -> FALSE)

function ternary (num){
  return num % 2 === 0 ? num + " is even" : num + " is odd" ;
}
for(var i=1;i<=10;i++){
  console.log(ternary(i));
}

//use multiple conditional (ternary)operators
function check(num){
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(check(0));

//difference between the var and let keywords
// var keyword allows you to declare your variable again like
 var name = "Abhay";
  var name="didi and chote";
 // it is correct for var but in case of let keyword it is erroe like
 let name= "Abhay"
 let name ="Abhay singh"
//but both of them enables following
 var name ="abhay"
 name = "chote"
let naam ="abhay"
naam ="didi"

//compare scopes of the var and let keywords
function test(){
  var i = "function scope";
  if(true){
    let i ="block scope";         //check scope by changing every var to
    console.log(i);              //let one by one
  }
  console.log(i);
  return i;
}
test();


//declare a read-only variable with the const keyword

function test(rec){
  const sen = rec + " is amazing";
//  sen =re + " is cool"; reassignment not possible
  if(true){
    console.log(sen);
  }
  return true;
}
test("CAT");
//we should use let and const more often because it reduces the
// error probability


//mutate an array declared with const
const s =[1,2,3];
//s=[2,1,3]; will not work
//but one way of doing this is
s[0]=2;
s[1]=1;
s[2]=3;
console.log(s);

//prevent object mutation
Object.freeze(constant_name)



//use arrow function to write concise anonymous functions

//anonymous function
const anonm = function(parameters){
  return new place();
};

 changes to

 const anom = (parameters) => new place();
A way to emit out a function
(  () => {
//write operation or code
}
)();

//write arrow functions with parameters
const concat = (ar1,ar2) => ar1.concat(ar2);
console.log(concat([1,2,3],[4,8,9]));


//write higher order arrow functions
const garray=[5,3.4,8,-64,0.14,12,0]
function squared(arr){
   const filter_square=arr.filter(num => Number.isInteger(num) && num > 0).map(num => num*num);
  return filter_square ;
}
console.log(squared(garray));

//Use rest operator with Funtion parameters
const sum=(function(){
  return function sum(...arr){
    return arr.reduce((a,b) => a + b , 0);
  };
})();

console.log(sum(1,2));


//use the spread operator to evaluate arrays In-Place
 arr2=[...arr1]; //spread operator
 arr1='abhay';
 console.log(arr2);//by using spread operator arr2 is till equal to arr1.



 //use destruction in assignment to assign variables from objects
 const tempra ={ "today" : 80, "tommorow" :100};

 function changetempra(temp){
   const{ "today" : nowtemp } = temp;//destruction operator
   return nowtemp;

 }
 console.log(changetempra(tempra));


//destructuring assignment with nested objects
const tempra ={ "today" : {min : 80, max : 101.5},
                "tommorow" :{min : 40, max : 121.5}};

function changetempra(temp){
  const{ "tommorow" :{ max : nowtemp} } = temp;//destruction operator
  return nowtemp;

}
console.log(changetempra(tempra));

//use destructuring assignment to assign variables from arrays
const [x,y,,z]=[1,2,3,4,5,6]
let a=8,b=2;
 (() =>{
   [a,b]=[b,a];
 }
 )();
 console.log(a);
 console.log(b);
 console.log(x);
 console.log(z);


//use destructuring assignment with the rest operator
//--from the end
const arr =[1,2,3,4,5,6,7,8,9];
function desres(arer){
  const[ ,  ,...lef]=arer.reverse();
  return lef.reverse();
};
console.log(arr);
console.log(desres(arr));

//---from the starting
const arrr =[1,2,3,4,5,6,7,8,9];
function desress(arer){
  const[ ,  ,...lef]=arer;
  return lef;
};
console.log(desress(arrr));

//use destructuring assignment to pass a function as paramator
 //it is used when we need only some info from an object instead of whole objects

 const phone ={
 "color" : "blue",
 size : 6.2,   // for importing & processing must  not be of type " " or ' '
 "brand" :"alcatel",
 "specs" : ["l=6.512","b=3.23","h=0.23"],
 prc : 80000
};

const avg =(function(){
  return function avg({size , prc}){
    return (size + prc )/2;
  }

})();
console.log(phone);
console.log(avg(phone));


//create string using template literals

const person={ name : "abhay" , hobby : "listening"}
const intro=`Hello! My name is ${person.name}
and i love ${person.hobby} songs `
console.log(intro);

//succes  fail skip
const result ={
  success :["max-lengt","no-end","arow funk"],
  failure :["no-var","top","linebreak"],
  skipped :["blaclist","no dup keys"]
};

function process(arr){
  let a = [];
  for(let i = 0; i < arr.length ; i++){
    a.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return a;
}
console.log(process(result.success));


//write concise object literal declarations using simple fields
const person = (name,age,profesion) =>{
  return{
    name : name,
    age : age,
    proffesion : profesion
  }
}
console.log(person("Abhay singh",19,"Student"));

//same as
const person1 = (name,age,profesion) =>({name,age,profesion})
console.log(person1("Abhay singh",19,"Student"));

//write concise declarative functions-nouse
const bicycle = {
  gear : 0,
  setgear : function(pass){   //this is called passing fuction as property
    this.gear = pass           //can be used to change the variable
  }
};
bicycle.setgear(94);
console.log(bicycle.gear);

// another way of doing this
const bicycle = {
  gear : 0,
  setgear(pass){
    this.gear = pass
  }
};
bicycle.setgear(94);
console.log(bicycle.gear);

//use class syntax to define a constructor function
 class  spaces{
   constructor(targetplanet){
     this.targetplanet=targetplanet;
   }
 }

 var zeus = new spaces('mars');
 console.log(zeus.targetplanet );


function material(){
 class sabjiyan{
   constructor(veggie){
     this.veggie = veggie;
   }
 }
 return sabjiyan;
}
const sabjiyan= material();
const pyaaj = new sabjiyan("palak");
console.log(pyaaj.veggie);

//use getters and setters to control access to an object--NHI AAAYA

//understanding the differences between import and require

import { capitalize }  from  "./dediya"
const str = capitalize("abhay");
console.log(str);

//use export to reuse a code block
const capitalize =(str) => {
  return str.toUpperCase();
}

export { capitalize };// to eport function from file

export const der ="bar";

//use * to import everything from a file
import * as capitalize from "./dediya"

//create an export fallback with export default

export default function subtract(x,y) {return x-y;}

//import ,a default export
import subtract from "math functions"
subtract(4,8);
*/
