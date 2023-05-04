// settings 

const settings = document.getElementById("settings").querySelector("div")
const settingIcon = document.getElementById("settings").querySelector("img")

settingIcon.addEventListener("click", () => {
    settings.classList.toggle("mouseenter")
})

// Function add task
const form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
});

const input = document.querySelector("#Add-task-input");
const ul = document.getElementsByClassName("tasks-ul")[0];
const divTask = document.querySelector(".checkLabel")
console.log(divTask)

function createTask(value){
    if (!value) {
        return;
      }
    const tasks = ul.querySelectorAll("li");
    for (let i = 0; i < tasks.length; i++) {
      const taskLabel = tasks[i].querySelector("label");
      if (taskLabel.innerHTML === value) {
        return;
      }
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add("delete-task");
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.innerHTML = value;

    li.classList.add("tasks-li");
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton)
    ul.appendChild(li);
}

input.addEventListener("keydown", (event) =>{
    if (event.keyCode === 13) {
        createTask(input.value); 
        input.value = "";
      } else{
        return;
      }
});



function getFormattedDate() {
  const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} de ${month}`;
}
getFormattedDate()

const spanDate = document.getElementsByClassName("data");
for (let i = 0; i < spanDate.length; i++) {
  spanDate[i].innerHTML = getFormattedDate();
}