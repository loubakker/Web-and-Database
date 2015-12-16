var InputTextBox = document.getElementById("InputTodo");
var InputDateBox = document.getElementById("DateInput");
var ImportanceBox = document.getElementById("Importance");
var List = document.getElementById("ToDoList");
var addbutton = document.getElementById("addTodo");
var sortondate = document.getElementById("DateSort");
var InputDescription = document.getElementById("InputDescription");

createImportancedrop = function(){
	var dropdown = document.createElement("select");
	dropdown.options.add( new Option("1","1"));
	dropdown.options.add( new Option("2","2"));
	dropdown.options.add( new Option("3","3"));
	return dropdown;
}
createTodoItem = function(){
	
	var TodoItem = document.createElement("li");
	
	var TodoJob = InputTextBox.cloneNode(true);
	TodoJob.className = "InputTodo";
	TodoJob.readOnly = true;
	
	var Description = InputDescription.cloneNode(true);
	Description.readOnly = true;
	
	var TodoDate = InputDateBox.cloneNode(true);
	TodoDate.readOnly = true;

	function dateOverdue() {

		todaysDate = new Date().toJSON().slice(0,10);
		if (TodoDate <= todaysDate) {
			alert("date overdue!");
		}
	};
	
	var importancedropdown = ImportanceBox.cloneNode(true);
	importancedropdown.readOnly = true;
	
	var Done = document.createElement("input");
	Done.type = "checkbox";
	Done.className = "checkbox";
	Done.id = "checkedBox";
	
	var Deletebutton = document.createElement("img");
	Deletebutton.type = "image";
	Deletebutton.value = "(x)";
	Deletebutton.className = "DeleteButton";
	Deletebutton.src = "delete.png";
	
	var Editbutton = document.createElement("img");
	Editbutton.type = "image";
	Editbutton.value = "edit";
	Editbutton.className = "EditButton";
	Editbutton.src = "edit.png";
	
	var Div = document.createElement("div");
	Div.className = "buttons";

	var Savebutton = document.createElement("img");
	Savebutton.type = "image";
	Savebutton.value = "save";
	Savebutton.className = "SaveButton";
	Savebutton.src = "save.png"
	
	Div.appendChild(Done);
	Div.appendChild(Editbutton);
	Div.appendChild(Deletebutton);
	
	
	TodoItem.appendChild(TodoJob);
	TodoItem.appendChild(TodoDate);
	TodoItem.appendChild(importancedropdown);
	TodoItem.appendChild(Description);
	TodoItem.appendChild(Div);
	
	List.appendChild(TodoItem);
	
	Deletebutton.onclick = function(){
		List.removeChild(TodoItem);
	}
	
	
	Editbutton.onclick = function(){
		TodoJob.readOnly = false;
		Description.readOnly = false;
		TodoDate.readOnly = false;
		importancedropdown.readOnly = false;
		Div.appendChild(Savebutton);
	}

	Savebutton.onclick = function(){
		TodoJob.readOnly = true;
		Description.readOnly = true;
		TodoDate.readOnly = true;
		importancedropdown.readOnly = true;
		Div.removeChild(Savebutton);
	}
	
	InputTextBox.value = "";
	InputDateBox.value = "";
	ImportanceBox.value = 0;
	InputDescription.value = "";
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


	
	
	

	
	