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

const completeTaskSound = new Audio("../audio/complete-task-sound.mp3")


const input = document.querySelector("#Add-task-input");
const ul = document.getElementsByClassName("tasks-ul")[0];
const divTask = document.querySelector(".checkLabel")

//Function to create task "template"
function createTask(value){
    
  //check if input.value is empty and return

  if (!value) return;
  
  
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


    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completeTaskSound.play()
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

// for (let i = 0; i < tasksLi.length; i++) {
//   const checkbox = tasksLi[i].querySelector('input[type="checkbox"]:checked');
//   if(checkbox){}
// }

// for (let i = 0; i < tasksLi.length; i++) {
//   const checkbox = tasksLi[i].querySelector('input[type="checkbox"]');
//   checkbox.addEventListener('change', function() {
//     if (this.checked) {
//       tasksLi[i].remove();
//     }
//   });
// }



function checkTask(){
  //input[type='checkbox']:checked

}
