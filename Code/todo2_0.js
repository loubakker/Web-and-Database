var InputTextBox = document.getElementById("InputTodo");
var InputDateBox = document.getElementById("DateInput");
var ImportanceBox = document.getElementById("Importance");
var List = document.getElementById("ToDoList");
var addbutton = document.getElementById("addTodo");

createImportancedrop = function(){
	var dropdown = document.createElement("select");
	dropdown.options.add( new Option("1","1"));
	dropdown.options.add( new Option("2","2"));
	dropdown.options.add( new Option("3","3"));
	return dropdown
}
createTodoItem = function(){
	
	var TodoItem = document.createElement("li");
	
	var TodoJob = document.createElement("input");
	TodoJob.type = "text";
	TodoJob.value = InputTextBox.value;
	
	var TodoDate = document.createElement("input");
	TodoDate.type = "Date";
	TodoDate.value = InputDateBox.value
	
	var Done = document.createElement("input");
	Done.type = "checkbox";
	
	var importancedropdown = createImportancedrop();
	importancedropdown.value = ImportanceBox.options[ImportanceBox.selectedIndex].value;
	
	var Updatebutton = document.createElement("input");
	Updatebutton.type = "button";
	Updatebutton.value = "update!";
	
	
	TodoItem.appendChild(TodoJob);
	TodoItem.appendChild(TodoDate);
	TodoItem.appendChild(Done);
	TodoItem.appendChild(importancedropdown);
	TodoItem.appendChild(Updatebutton);
	List.appendChild(TodoItem);
	}
	
addbutton.onclick = function(){
	
	createTodoItem();
	
	};
	
	