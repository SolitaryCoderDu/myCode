// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!'

// let myVariable;
// myVariable = 'lilei';
// let myVariable = 10;
// let myVariable = true;
// let myVariable = [1, 'lilei', 'hanmeimei', 10];
// let myVariable = document.querySelector('h1');

/* 多行
注释 */
//单行注释

// let myVariables = 3;
// console.log(myVariables === 4); // false
// console.log(myVariables !== 3)

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//     alert('i like chocolate icecream')
// }else{
//     alert('but chocolate is my best love')
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(4, 5));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

document.querySelector('h1').onclick = function() {
    alert("don't touch me,i am afraid pain!")
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
        myImage.setAttribute('src', 'images/firefox-icon2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null) {
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
}

myButton.onclick = function() {
    setUserName();
}