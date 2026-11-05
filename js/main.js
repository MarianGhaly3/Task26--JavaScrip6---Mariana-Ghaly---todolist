var todoForm = document.getElementById('todoForm');
var todoInput = document.getElementById('todoInput');
var todoList = document.getElementById('todoList');

var taskslist = [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var taskText = todoInput.value;

    if (taskText !== "") {
        taskslist.push(taskText);
        updateTasks();
        todoInput.value = "";
    }
});

function updateTasks() {
    todoList.innerHTML = "";

    taskslist.forEach(function(taskText, index) {

        var newLi = document.createElement("li");
        newLi.innerHTML = taskText;
        newLi.style.marginTop = '10px';

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.style.marginLeft = "50px";

        deleteBtn.addEventListener('click', function() {
            taskslist.splice(index, 1);
            updateTasks();
        });

        newLi.appendChild(deleteBtn);
        todoList.appendChild(newLi);
    });
}