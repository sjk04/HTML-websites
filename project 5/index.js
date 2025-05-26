
const textbox=document.getElementById("textbox");
const tof=document.getElementById("tof");
const toc=document.getElementById("toc");
const result=document.getElementById("result");

let temp;

function convert()
{
  if(tof.checked)//The .checked property in JavaScript is used to check the state of a checkbox or radio button. It is a property of the HTMLInputElement object and is commonly used to 
  // determine whether the element is selected (checked) or not.
  {
    temp=Number(textbox.value);
    temp=temp*9/5+32;
    result.textContent=temp+"°F";
  }
  else if(toc.checked)
  {
    temp=Number(textbox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp+"°C";
  }
  else{
    result.textContent="Select a unit"
  }
}