let todoList = [{task:'Buy groceries', status:'Done'},
    {task:'Finish project', status:'In Progress'},
    {task:'Clean the car', status:'Done'},
];

const fetchtodoList = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        

    })
}

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
    //    const todoItem1 = document.createElement('li');
    //    todoItem1.textContent = todoList[0];
    //    todoItems.appendChild(todoItem1);

       //const functionName =() => {};
      todoList.forEach((value) => {
        console.log(value.status);
        const todoItem = document.createElement('li');
        todoItem.textContent = value.task + "-" + value.status;
        todoItems.appendChild(todoItem);
      });
    }

    

//Add event listener
viewbutton.addEventListener('click', showTodos);

