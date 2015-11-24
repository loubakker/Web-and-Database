var InputTextBox = document.getElementById("InputTodo");
var InputDateBox = document.getElementById("DateInput");
var ImportanceBox = document.getElementById("Importance");
var List = document.getElementById("ToDoList");
var addbutton = document.getElementById("addTodo");
var sortondate = document.getElementById("DateSort");

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
	
	var Deletebutton = document.createElement("input");
	Deletebutton.type = "button";
	Deletebutton.value = "(x)";
	
	TodoItem.appendChild(TodoJob);
	TodoItem.appendChild(TodoDate);
	TodoItem.appendChild(Done);
	TodoItem.appendChild(importancedropdown);
	TodoItem.appendChild(Deletebutton);
	List.appendChild(TodoItem);
	
	Deletebutton.onclick = function(){
		List.removeChild(TodoItem);
	}
	}
	
	
addbutton.onclick = function(){
	
	createTodoItem();
	
	}
	
sortondate.onclick = function(){
	var allTodos = List.childNodes;
	
	function compare(a,b){
		if (a.childNodes[1].value > b.childNodes[1].value)
			return 1;
		if (a.childNodes[1].value < b.childNodes[1].value)
			return -1;
		return 0;
	}

	
	
alert(allTodos[0].childNodes[1].value);
	}
	
	

	
	