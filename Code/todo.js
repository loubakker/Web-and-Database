//Button code:
//<li><input type="checkbox" /> <input type="checkbox" /><span> Write this </span></li>
function addNewTodo(ItemText){
	var Item = document.createElement("li");
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	var span = document.createElement("span");
	span.innerText = ItemText;
	var List = document.getElementById("ToDoList");
	
	List.appendChild(checkBox);
	List.appendChild(span);
	
	
	List.appendChild(Item);
}

var InputTextBox = document.getElementById("InputTodo");
InputTextBox.onkeyup = function(event){
	
	var inputtext = InputTextBox.value;
	
	if(inputtext == "" || inputtext == " "){
		return false;
	}
	if (event.which == 13){
		addNewTodo(inputtext);	
	}
	
	};