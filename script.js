let display = document.getElementById("display");

let answerMode = false;

function append(value){

let operators=["+","-","*","/","%"];

/* After answer appears */

if(answerMode){

if(operators.includes(value)){

display.value += value;

}
else{

display.value = value;

}

answerMode=false;

return;

}


let lastChar=display.value.slice(-1);

/* Prevent +++++ */

if(
operators.includes(lastChar)
&&
operators.includes(value)
){

return;

}

display.value += value;

}



function calculate(){

try{

display.value=
eval(display.value);

answerMode=true;

}

catch{

display.value="Error";

}

}


function clearDisplay(){

display.value="";
answerMode=false;

}


function deleteLast(){

display.value=
display.value.slice(0,-1);

}