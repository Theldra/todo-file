let todoList = ['Buy groceries','Finish project','Clean the car', 'Eat lunch', 'Go to bed'];
console.log(todoList);
//Select the button     
    const viewbutton = document.getElementById('to-do');
    console.log('Button:', viewbutton);
    const todoItems = document.getElementById('todo-list');
    
    //es5 Syntax
    //keyword function.[name of the func] () {}
    function showTodos () {
        //create an li element
        //add textcontent to li
        //attach the li to the ul element
       const todoItem1 = document.createElement('li');
       todoItem1.textContent = todoList[0];
       todoItems.appendChild(todoItem1);

       const todoItem2 = document.createElement('li');
       todoItem2.textContent = todoList[1];
       todoItems.appendChild(todoItem2);
       
       const todoItem3 = document.createElement('li');
       todoItem3.textContent = todoList[2];
       todoItems.appendChild(todoItem3);

       const todoItem4 = document.createElement('li');
       todoItem4.textContent = todoList[3];
       todoItems.appendChild(todoItem4);

       const todoItem5 = document.createElement('li');
       todoItem5.textContent = todoList[4];
       todoItems.appendChild(todoItem5);
    }

    

//Add event listener
viewbutton.addEventListener('click', showTodos);

