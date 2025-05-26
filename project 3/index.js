const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresul");

mysubmit.onclick = function() {
    if (mycheckbox.checked) {
        subresult.textContent = `You have clicked the pay option.`;
        
        
        if (visabtn.checked || mastercard.checked || paypal.checked) {
            let selectedPayment = "";
            
            if (visabtn.checked) {
                selectedPayment = "Visa";
            } else if (mastercard.checked) {
                selectedPayment = "Mastercard";
            } else if (paypal.checked) {
                selectedPayment = "PayPal";
            }

            paymentresult.textContent = `You have selected the following card payment: ${selectedPayment}`;
        } else {
            paymentresult.textContent = `You have not selected a payment method yet.`;
        }
        
    } else {
        subresult.textContent = `You have not clicked the pay option yet.`;
        paymentresult.textContent = ``;  
    }
}
