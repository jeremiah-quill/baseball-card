const color = document.querySelector('#border-container');
const pic = document.querySelector('#card-container');
const dogRadio = document.querySelector('#dogRadio');
const catRadio = document.querySelector('#catRadio');
const monkeyRadio = document.querySelector('#monkeyRadio');
const keyArray = ['name', 'position', 'number', 'team']
const button = document.querySelector('#button');
const textArray = document.querySelectorAll('.inputs');
const card = document.querySelector('#card');
const inputWrapper = document.querySelector('.main-input-wrapper');
const resetButton = document.querySelector('#resetButton');

button.addEventListener('click', () => {
    let i=0;
    for (i=0; i<textArray.length; i+=1) {
        const text = textArray[i];
        const key = document.getElementById(keyArray[i]);
        key.textContent = text.value;
    };

    color.style.backgroundColor = inputColor.value;    

    if(dogRadio.checked) {
    pic.style.background = "url('dog2.jpg') no-repeat center";
}
    if (catRadio.checked) {
    pic.style.background = "url('cat.jpg') no-repeat center";
}
    if (monkeyRadio.checked){
    pic.style.background = "url('monkey.jpg') no-repeat center";
}
    card.style.display='flex';
    inputWrapper.style.display='none';
    resetButton.style.display='block';
});
    

resetButton.addEventListener('click', () => {
    card.style.display='none';
    inputWrapper.style.display='flex';
    resetButton.style.display='none';
})
