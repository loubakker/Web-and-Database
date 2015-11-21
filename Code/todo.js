//Button code:
//<li><input type="checkbox" /> <input type="checkbox" /><span> Write this </span></li>

var todo = {};


function addNewTodo(List, ItemText, InputDate){
	todo.job = ItemText;
	todo.date = InputDate;
	
	List.todo = todo;
	PrintTodo(todo)
}

function PrintTodo(Todo){
	
	Item = document.createElement("li");
	
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	
	var span = document.createElement("input");
	span.type = "text";
	span.value = Todo.job ;
	
	var List = document.getElementById("ToDoList");
	
	var tododate = document.createElement("input");
	tododate.type = "Date";
	tododate.value = Todo.date;
	
	
	Item.appendChild(checkBox);
	Item.appendChild(span);
	Item.appendChild(tododate);
	List.appendChild(Item);
}

var InputTextBox = document.getElementById("InputTodo");
var InputDateBox = document.getElementById("DateInput");
var List = document.getElementById("ToDoList");
var addbutton = document.getElementById("addTodo");
var todoamount = 0;

addbutton.onclick = function(){
	
	var inputtext = InputTextBox.value;
	
	var inputdate = InputDateBox.value;
	
	if(inputtext == "" || inputtext == " "){
		return false;
	}
	addNewTodo(inputtext, inputdate);	
	todoamount = todoamount + 1;
	};
	