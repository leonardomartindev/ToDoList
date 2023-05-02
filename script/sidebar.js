const sideBar = document.getElementById('side-bar');
const arrowCollapse = document.getElementById('arrow-collapse');

arrowCollapse.addEventListener('click', () => {
    // if(sideBar.style.width === "0px"){
    // }
    if(sideBar.style.marginLeft === "-370px"){
        sideBar.style.marginLeft = "0px"
        arrowCollapse.style.left = "20vw"
        arrowCollapse.style.transform = "scaleX(1)"
    }else{
        sideBar.style.marginLeft = "-370px"
        arrowCollapse.style.left = "2vw"
        arrowCollapse.style.transform = "scaleX(-1)"

    }
})

