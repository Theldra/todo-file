let todoList = ['Buy groceries','Finish project','Clean the car'];
console.log(todoList);
//Select the button     
    const viewbutton = document.getElementById('to-do');
    console.log(viewbutton)
    
    //es5 Syntax
    //keyword function.[name of the func] () {}
    function showTodos () {
        alert('The function has been called');
    }

    //function call
    //showTodos();

//Add event listener
//viewbutton.addEventListener('click', [function]);

function addNumbers (firstNum, secondNum) {
    //let firstNum = 35;
    //let secondNum = 8;

    let total = firstNum + secondNum;
    console.log(total);
}

addNumbers(2,5); //2 and 5
addNumbers(9,8); //9 and 8
addNumbers(12,16); //12 and 16

function squareValues (value) {
    let total = value * value
    console.log(total)
}

squareValues(4); //4
squareValues(2); //2
squareValues(9); //9

function addNumbers (text,value1,value2) {
    let total = value1 + value2;
    console.log(text,total)
}

addNumbers('2+5 =', 2,5);
addNumbers('7+3 =', 7,3);


let addNumbers = (text, num1, num2) => text + (num1 + num2);
console.log(addNumbers ('7+3 = ', 7, 3));
console.log(addNumbers ('12+23 = ', 12, 23));
console.log(addNumbers ('17+3 = ', 17, 3));


