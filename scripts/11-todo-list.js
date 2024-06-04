const todoList = [
  { name: "make dinner", dueDate: "03/06/2024" },
  { name: "wash dishes", dueDate: "03/06/2024" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name; esse código faz o mesmo que o abaixo, é apenas um shortcut
    const { name, dueDate } = todoObject;
    //const dueDate = todoObject.dueDate;
    const html = `<p>${name} ${dueDate} <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList()
    ">delete</button></p>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dueInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dueInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
