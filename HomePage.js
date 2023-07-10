// adding to cart function is being created

const increaseElement = document.getElementById('increment')
const cartBtn = document.getElementById('cartBtn')
const cartBtn1 = document.getElementById('cartBtn1')
const cartBtn2 = document.getElementById('cartBtn2')
const cartBtn3 = document.getElementById('cartBtn3')
const cartBtn4 = document.getElementById('cartBtn4')
const cartBtn5 = document.getElementById('cartBtn5')
const cartBtn6 = document.getElementById('cartBtn6')
const cartBtn7 = document.getElementById('cartBtn7')


var counter = 0;
increaseElement.innerHTML = counter;

const incrementCounter = () =>{
    counter++ ;
    increaseElement.innerHTML = counter;
}

const messageAlert = () =>{
    swal("Congrats!", "Item has been Added to cart ", "success");
}

cartBtn.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn1.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn2.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn3.aaddEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn4.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn5.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn6.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})
cartBtn7.addEventListener("click", ()=>{
    incrementCounter();
    messageAlert();
})



