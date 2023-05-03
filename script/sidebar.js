const sideBar = document.getElementById('side-bar');
const arrowCollapse = document.getElementById('arrow-collapse');
const lis = sideBar.querySelector("ul").querySelectorAll("li");
const nav = document.getElementById('nav-header');
const inbox = document.getElementById("inbox")


console.log(lis)

arrowCollapse.addEventListener('click', () => {
    // if(sideBar.style.width === "0px"){
    // }
    if(sideBar.style.marginLeft === "-370px"){
        nav.style.width = "75vw";
        nav.style.marginLeft = "25vw";
        inbox.style.marginLeft = "2rem"
        sideBar.style.marginLeft = "0px";
        arrowCollapse.style.left = "20vw";
        arrowCollapse.style.transform = "scaleX(1)";
    }else{
        sideBar.style.marginLeft = "-370px";
        inbox.style.marginLeft = "7%"
        arrowCollapse.style.left = "2vw";
        nav.style.marginLeft = "0";
        nav.style.width = "100vw";
        arrowCollapse.style.transform = "scaleX(-1)";

    }
})

