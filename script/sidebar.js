const sideBar = document.getElementById('side-bar');
const arrowCollapse = document.getElementById('arrow-collapse');
const lis = sideBar.querySelector("ul").querySelectorAll("li");
const nav = document.getElementById('nav-header');
const inbox = document.getElementById("inbox");
const taskInput = document.getElementById("Add-task-input");
const tasksLi = document.getElementsByClassName("tasks-li")


arrowCollapse.addEventListener('click', () => {

    for (let i = 0; i < tasksLi.length; i++) {
        const taskLi = tasksLi[i];
        taskLi.classList.toggle("side-close-li-ajust");
      }
    if(sideBar.style.marginLeft === "-370px"){
        nav.style.width = "75vw";
        nav.style.marginLeft = "25vw";
        inbox.style.marginLeft = "2rem"
        sideBar.style.marginLeft = "0px";
        arrowCollapse.style.left = "20vw";
        arrowCollapse.style.transform = "scaleX(1)";
        taskInput.style.width = "70vw";
        taskInput.style.marginLeft = "0";
    }else{
        
        sideBar.style.marginLeft = "-370px";
        inbox.style.marginLeft = "7%"
        arrowCollapse.style.left = "2vw";
        nav.style.marginLeft = "0";
        nav.style.width = "100vw";
        arrowCollapse.style.transform = "scaleX(-1)";
        taskInput.style.width = "90vw";
        taskInput.style.marginLeft = "-20vw";
    }
})

