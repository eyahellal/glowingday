/*let input=document.querySelectorAll("#input")

let sendbtn=document.querySelector("#sendbtn")
let message=document.querySelector("#message")


sendbtn.onclick=function(){
    input.value="  ";
    message.style.visibility="visible";

}
function openfunction2(){
    location.href="test.html"}*/
    const navBar = document.querySelector(".nav");
    const navbtn = document.querySelector(".navi");
    const cancelbtn=document.querySelector(".cancel")

    //make the navbar ONLY appear when navi is clicked (solved)
    
    navbtn.onclick=function () {
        document.querySelector(".contain").style.display="block";
        navBar.classList.add("active-navbar");
        navBar.classList.add("animation")
        navbtn.classList.add("unactive");
        cancelbtn.classList.add("active");
        navbtn.style.visibility="hidden"
    
        
    }
    cancelbtn.onclick=function () {
        document.querySelector(".contain").style.display="none"
        navBar.classList.remove("active-navbar");
        cancelbtn.classList.remove("active");
        navbtn.classList.add("active");
        navbtn.style.visibility="visible";
       
    
    }