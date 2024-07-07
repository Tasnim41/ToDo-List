document.querySelector('#push').onclick = function() {
    const taskInput = document.querySelector('#task-input');
    const taskName = taskInput.value;

    if (taskName.length == 0) {
        alert("Please enter a task.");
    } else {
        const tasksContainer = document.querySelector('#tasks');

        const taskElement = document.createElement('div');
        taskElement.className = 'task';

        const taskNameElement = document.createElement('span');
        taskNameElement.id = 'taskname';
        taskNameElement.textContent = taskName;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        const trashIcon = document.createElement('i');
        trashIcon.className = 'https://cdn-icons-gif.flaticon.com/11677/11677485.gif'; // Use the standard FontAwesome classes
        
        deleteButton.appendChild(trashIcon);
        
        // Now, you can append the delete button to your task element or container as needed
        

      // Assuming you have an array to store your tasks
const tasks = [];

// Add a click event to delete the task
deleteButton.addEventListener('click', function() {
    // Get the index of the task element to delete
    const index = tasks.indexOf(taskNameElement.textContent);

    if (index !== -1) {
        // Remove the task from the array using splice
        tasks.splice(index, 1);
    }

    // Remove the task element from the DOM
    tasksContainer.removeChild(taskElement);
});

// Append the task name and delete button to the task element
taskElement.appendChild(taskNameElement);
taskElement.appendChild(deleteButton);

// Append the task element to the tasks container
tasksContainer.appendChild(taskElement);

// Add the task name to the tasks array
tasks.push(taskNameElement.textContent);

// Clear the input field
taskInput.value = '';

    }
}

var tasks = document.querySelectorAll(".task");
for (var i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener('click', function(event) {
        // Check if the event target is the task itself (not its children)
        if (event.target === this) {
            this.classList.toggle('completer');
        }
    });
}