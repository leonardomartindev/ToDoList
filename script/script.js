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

//Function to create task "template"
function createTask(value){
    
  //check if input.value is empty and return

  if (!value) {
    alert("tarefa não pode estar vazia")
    return
  };
  
  
      const tasks = ul.querySelectorAll("li");
    for (let i = 0; i < tasks.length; i++) {
      const taskLabel = tasks[i].querySelector("label");
      if (taskLabel.innerHTML === value) {
        alert("Essa tarefa já foi adicionada")
        return;
      }
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add("delete-task");
    deleteButton.addEventListener("click", () => {
      if(confirm("Tem certeza que deseja remover essa tarefa?")){

        li.remove();
      } else {return}
    });
    
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.innerHTML = value;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    const completeTaskSound = new Audio("../audio/complete-task-sound.mp3")
    completeTaskSound.play();
    setTimeout(() => {
      ul.removeChild(li);
    }, 400);
  }
});
    li.classList.add("tasks-li");
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton)
    ul.appendChild(li);
}
//capturing enter key and calling function
input.addEventListener("keydown", (event) =>{
    if (event.keyCode === 13) {
        createTask(input.value); 
        input.value = "";
      } else{
        return;
      }
});

// }
const html = document.querySelector("html")
const config = document.getElementsByClassName("container-config");
const darkmodeCheckbox = document.getElementsByClassName
("checkbox-config-darkmode")[0]; //Acesso ao primeiro elemento da coleção
darkmodeCheckbox.addEventListener('change', function() { //Adiciona um evento de mudança
  if(this.checked) {
    html.classList.add("darkmode")
  } else{
    html.classList.remove("darkmode")
  }
});

