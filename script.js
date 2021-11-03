

// variable declare
let addInput = document.querySelector('#add-input');
let addbtn = document.querySelector('#add-btn');

let removeInput = document.querySelector('#remove-input');
let removeBtn = document.querySelector('#remove-btn');

let totalMoney = document.querySelector('#total-money');
let addedMoney = document.querySelector('#added-money');
let removedMoney = document.querySelector('#removed-money');


// data add event
addbtn.addEventListener('click', function() {
    addedMoney.innerHTML = addInput.value;
    totalMoney.innerHTML = parseFloat(totalMoney.innerHTML) + parseFloat(addedMoney.innerHTML);

    addInput.value = '';
});


// data removed event
removeBtn.addEventListener('click', function() {

    if(parseFloat(totalMoney.innerHTML) < removeInput.value) {
        alert(' Please khoroch komai kor, \n aage kichu jog kor!');
    }else {
        removedMoney.innerHTML = removeInput.value;
        totalMoney.innerHTML = parseFloat(totalMoney.innerHTML) - parseFloat(removedMoney.innerHTML);
    }

    removeInput.value = "";
});