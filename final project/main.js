function openfunction(){
    location.href="explore.html"}
//select elements
const navBar = document.querySelector(".nav");
const navbtn = document.querySelector(".navi");
const cancelbtn=document.querySelector(".cancel")
//make the navbar ONLY appear when navi is clicked (solved)

navbtn.onclick=function () {
    navBar.classList.add("active-navbar");
    navBar.classList.add("animation")
    navbtn.classList.add("unactive");
    cancelbtn.classList.add("active");
    navbtn.style.visibility="hidden"

    
}
cancelbtn.onclick=function () {
    navBar.classList.remove("active-navbar");
    cancelbtn.classList.remove("active");
    navbtn.classList.add("active");
    navbtn.style.visibility="visible";
   

}







/*make another button appear instead of navi called cancel
1- make navi disepear when navBar is active 
2-insert cancel at its place when its active*/

   


