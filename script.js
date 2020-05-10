let menu = {
    coffee_price:0,
    inputMoney:0
}

document.getElementById('buttons').addEventListener('click' , (e) => {
    let value = e.target.value;
    menu.coffee_price = value;
    if(document.getElementById('input_money').value === ''){
        document.getElementById('message').innerHTML = 'Գումար մուտքագրեք';
    }else{
        document.getElementById('message').innerHTML = 'Սեղմեք Take կոճակը'
    }
})

document.getElementById('input_money').addEventListener('change' , (e) => {
    let value = e.target.value;
    menu.inputMoney = value
})

document.getElementById('send').addEventListener('click' , () => {
    let value = document.getElementById('input_money').value;
    let curentMoney = document.getElementById('current_money');


    if(document.getElementById('input_money').value === ''){
        document.getElementById('message').innerHTML = 'Գումար մուտքագրեք';
    }
    else if(isNaN(+value)){
        document.getElementById('message').innerHTML = 'Մուտքագրեք թիվ'
    }else{
        curentMoney.innerHTML = `${value} դրամ`
        document.getElementById('message').innerHTML = 'Ընտրեք սուրճի տեսակը'
    }
})

document.getElementById('take').addEventListener('click' , () => {
    let message = document.getElementById('message');
    let {coffee_price , inputMoney} = menu;

    if(document.getElementById('input_money').value === ''){
        document.getElementById('message').innerHTML = 'Գումար մուտքագրեք';
    }
    else if(+inputMoney > +coffee_price){
        let totalPrice = inputMoney - coffee_price
        message.innerHTML = `${totalPrice} դրամ ձեր մանրը`;
        document.getElementById('current_money').innerHTML = '';
        document.getElementById('input_money').value = ''
    }else if(+inputMoney === +coffee_price){
        message.innerHTML = `Մանր չկա`;
        document.getElementById('current_money').innerHTML = '';
        document.getElementById('input_money').value = ''
    }else if(+inputMoney < +coffee_price){
        let pakas = coffee_price - inputMoney;
        message.innerHTML = `${pakas} դրամ պակաս է`;
        document.getElementById('current_money').innerHTML = '';
        document.getElementById('input_money').value = ''
    }
    // setTimeout(() => {
    //     message.innerHTML = ''
    // },3000)
})
