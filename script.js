const container = document.createElement("div");
container.className = "container";


const title = document.createElement("h1");
title.className = "title";
title.textContent = "Todo List";


const form = document.createElement("div");
form.className = "form";

const input = document.createElement("input");
input.className = "input";
input.placeholder = "Введите задачу";

const button = document.createElement("button");
button.className = "btn";
button.textContent = "Add";

form.append(input, button);


const line = document.createElement("hr");
line.className = "line";


const tasks = document.createElement("div");
tasks.className = "tasks";


container.append(title, form, line, tasks);
document.body.append(container);


function createTask(text) {
    const card = document.createElement("div");
    card.className = "card";

    const taskText = document.createElement("p");
    taskText.className = "task-text";
    taskText.textContent = text;

    const time = document.createElement("span");
    time.className = "time";

    const now = new Date();
    time.textContent = now.toLocaleTimeString();

    const del = document.createElement("span");
    del.className = "delete";
    del.innerHTML = "&times;";

    del.addEventListener("click", () => {
        card.remove();
    });

    card.append(taskText, time, del);
    tasks.append(card);
}


button.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value) return;

    createTask(value);
    input.value = "";
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});

function createTask(text) {
    const card = document.createElement("div");
    card.className = "card";

    const taskText = document.createElement("p");
    taskText.className = "task-text";
    taskText.textContent = text;

    const time = document.createElement("span");
    time.className = "time";

    const now = new Date();
    time.textContent = now.toLocaleTimeString();

    const del = document.createElement("span");
    del.className = "delete";
    del.innerHTML = "&times;";

    del.addEventListener("click", () => {
        card.remove();
    });

    const edit = document.createElement("span");
    edit.className = "edit";
    edit.innerHTML = "✎";

    edit.addEventListener("click", () => {
        const newText = prompt(
            "Введите новое название задачи:",
            taskText.textContent
        );

        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    });

    card.append(taskText, time, edit, del);
    tasks.append(card);
}