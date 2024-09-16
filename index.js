/*variable=a container that stores a value
 two steps
1. declaration  let x;
2.assignment  x=10;*/

/* arithmetic operators=operands(values,variables,etc)
                          operators(+ - * /)
                          ex 11=x-5;*/
let counter=0;
document.getElementById("button1").onclick=function(){
    counter++;
    document.getElementById("myh2").textContent=counter;
}
document.getElementById("button2").onclick=function(){
    counter--;
    document.getElementById("myh2").textContent=counter;
}
document.getElementById("button3").onclick=function(){
    counter=0;
    document.getElementById("myh2").textContent=counter;
}


