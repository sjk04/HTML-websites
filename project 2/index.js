const mybutton = document.getElementById("mybutton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min = 1;
const max = 6;
let randumnum1;
let randumnum2;
let randumnum3;

mybutton.onclick = function() {
    randumnum1 = Math.floor(Math.random() * max) + min;
    randumnum2 = Math.floor(Math.random() * max) + min;
    randumnum3 = Math.floor(Math.random() * max) + min;
    mylabel1.textContent =`first random : ${randumnum1}`; 
    mylabel2.textContent =`second random : ${randumnum2}`;
    mylabel3.textContent =`third random : ${randumnum3}`; 
};
