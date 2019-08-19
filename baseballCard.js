const color = document.getElementById('border-container');
const pic = document.getElementById('card-container');
const dogRadio = document.getElementById('dogRadio');
const catRadio = document.getElementById('catRadio');
const monkeyRadio = document.getElementById('monkeyRadio');
const textArray = ['inputName', 'inputPosition', 'inputNumber', 'inputTeam'];
const keyArray = ['name', 'position', 'number', 'team']
const button = document.getElementById('button');

button.addEventListener('click', () => {
    let i=0;
    for (i=0; i<textArray.length; i+=1) {
        const text = document.getElementById(textArray[i]);
        const key = document.getElementById(keyArray[i]);
        key.innerHTML = text.value;
    };
    
    color.style.backgroundColor = inputColor.value;
    
    if(dogRadio.checked) {
    pic.style.background = "url('dog2.jpg') no-repeat center";
}
    else if (catRadio.checked) {
    pic.style.background = "url('cat.jpg') no-repeat center";
}
    else {
    pic.style.background = "url('monkey.jpg') no-repeat center";
}
});
