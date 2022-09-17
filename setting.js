const total = document.getElementById('total');
const subTotal = document.getElementById('subtotal');
const taxAmount = document.getElementById('tax');
const cartPage = document.getElementById('cartPage');
const orderMsg = document.getElementById('orderMsg');
const checkOut = document.getElementById('checkOut').addEventListener('click',function(){
    if(total.innerHTML == 0){
        alert("please select minimum 1 product");
    }
    else{
        alert("Order success");
        cartPage.style.display="none";
        orderMsg.classList.add('msgOpen');
    }
});


function increas(incDec,proPrc,proPrcTo){
    const input = document.getElementById(incDec);
    const productPrice = document.getElementById(proPrc).innerHTML;
    const productAmount = document.getElementById(proPrcTo);
    const proPrice = parseInt(productPrice);
    if(input.value>=5){
        input.value=5;
        alert("only five product allow")
    }
    else{
        input.value = parseInt(input.value) + 1;
        productAmount.innerHTML = proPrice * input.value;

        const productTotalPrice = document.getElementsByClassName('productPrice'); 

        subTotal.innerHTML = parseInt(productTotalPrice[0].innerHTML) + parseInt(productTotalPrice[1].innerHTML);

        taxAmount.innerHTML = parseInt(subTotal.innerHTML) * 15 / 100;

        total.innerHTML = parseFloat(subTotal.innerHTML) + parseFloat(taxAmount.innerHTML);
    }
};
function decreas(incDec,proPrc,proPrcTo){
    const input = document.getElementById(incDec);
    const productPrice = document.getElementById(proPrc).innerHTML;
    const productAmount = document.getElementById(proPrcTo);
    const proPrice = parseInt(productPrice);
    if(input.value<=1){
        input.value=1;
        alert("zero product not allow")
    }
    else{
        input.value = parseInt(input.value) - 1;
        productAmount.innerHTML = proPrice * input.value;

        const productTotalPrice = document.getElementsByClassName('productPrice'); 
        
        subTotal.innerHTML = parseInt(productTotalPrice[0].innerHTML) + parseInt(productTotalPrice[1].innerHTML);

        taxAmount.innerHTML = parseInt(subTotal.innerHTML) * 15 / 100;

        total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(taxAmount.innerHTML);
    }

};

