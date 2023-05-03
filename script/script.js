// settings 

const settings = document.getElementById("settings").querySelector("div")
const settingIcon = document.getElementById("settings").querySelector("img")

settingIcon.addEventListener("click", () => {
    settings.classList.toggle("mouseenter")
})

// Function add task
const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
})
const input = document.querySelector("#Add-task-input");
const ul = document.getElementsByClassName("tasks-ul")[0];

function createTask(value){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.innerHTML = value;

    li.appendChild(checkbox);
    li.appendChild(label);
    li.classList.add("tasks-li");
    ul.appendChild(li);
}

input.addEventListener("keydown", (event) =>{
    if (event.keyCode === 13) {
        createTask(input.value); 
      } else{
        return;
      }
});
