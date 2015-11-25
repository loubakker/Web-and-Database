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
	InputTextBox.value = "";
	InputDateBox.value = "";
	ImportanceBox.value = 0;
}
	
	
addbutton.onclick = function(){
	
	createTodoItem();
	
	}

addtolist = function(list,todo, index){
	for (i = 0; i<list.length-index; i++){
			var temp = list[list.length-i-1];
			list[list.length-i] = temp;
		
	}
	list[index] = todo;
	return list
};

compare = function(list,todo){
	
	if (list.length == 0 ){
		list[0] = todo;
		return list;
	}
	for (j = 0; j<list.length; j++){
		if (todo < list[j]){
			list = addtolist(list,todo,j);
			return list;
		}
		if (j == list.length-1){
			list[list.length] = todo;
			return list;
		}
		
	}	
	
};

sort = function(c){
	var a = [];
	for (k = 0; k<c.length;k++){
		compare(a,c[k]);
	};
	return a;
	
}



sortondate.onclick = function(){
	var allTodos = List.childNodes;
	var tododates = [];
	for (i = 0; i<allTodos.length;i++){
		tododates[i] = allTodos[i].childNodes[1].value;
	}
	var b = [5,2,3];
	tododates = sort(tododates);
	for (i=0;i<tododates.length;i++){
		console.log(tododates[i]);
	}
};


	
	
	

	
	