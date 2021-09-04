const todos = document.getElementById('todos');
const form = document.getElementById('form');
const input = document.getElementById('input');

loadTodo();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getInputTodo();
});

function getInputTodo() {
    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        addFeatures(todoEl);

        todos.appendChild(todoEl);

        updateLS();

        input.value = "";
    }
}

function addFeatures(todoEl) {
    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        updateLS();
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLS();
    })
}

function updateLS() {
    const todoEL = document.querySelectorAll("li");

    const todos = [];

    todoEL.forEach(todo => {
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        });
    });

    localStorage.setItem('To-dos', JSON.stringify(todos))
}

function loadTodo() {
    const savedTodos = JSON.parse(localStorage.getItem("To-dos"));
    if (!savedTodos) {
        return
    }

    savedTodos.forEach(todo => {
        const todoEl = document.createElement("li");

        console.log(todoEl.innerText);
        todoEl.innerText = todo.text;
        if (todo.completed) {
            todoEl.classList.add('completed')
        }

        addFeatures(todoEl);
        todos.appendChild(todoEl);
        updateLS();
    })
}