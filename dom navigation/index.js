/* DOM NAVIGATION = The process of navigating through the structure
                    of an html document using javascript

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/
//-------------------.firstElementChild------------------
/*
const element=document.getElementById("fruits");
const firstchild=element.firstElementChild;
firstchild.style.backgroundColor="yellow"
const veg=document.getElementById("vegetables");
const firstveg=veg.firstElementChild;
firstveg.style.backgroundColor="yellow"
*/
// with queryselect all
/*
const ul=document.querySelectorAll("ul");
ul.forEach(u=>{
    const firstchild=u.firstElementChild;
    firstchild.style.backgroundColor="yellow";
})
*/

//---------------------.lastElementChild-------------------\
/*
const ul=document.querySelectorAll("ul");
ul.forEach(u=>{
    const firstchild=u.lastElementChild;
    firstchild.style.backgroundColor="yellow";
})
*/


