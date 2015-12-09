var main = function(){
	setInterval(function () {
 console.log("Fetching the todo list from the server.");
 var addTodosToList = function(todos){
	 console.log("taddtodostolist uitgevoerd");
	 var todolist = document.getElementById("todo-list");
	 for (var key in todos){
		 
		 var li = document.createElement("li");
		 li.innerHTML = "TODO: "+todos[key].message;
		 todolist.appendChild(li);	 
	 } 
	 
 }
 
 $.getJSON("todos", function(todos){
        var todo = '';
        $.each( todos, function( key, val ) {
            todo += '<li id="' + key + '"><a href="#">' + val.message + '</a></li>';
        });
		$("#todo-list").empty();
        $("#todo-list").append(todo);
 });

console.log("Fetching the todo list from the server.");
 }, 2000);
}
$(document).ready(main);