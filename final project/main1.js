
    const navBar = document.querySelector(".nav");
    const navbtn = document.querySelector(".navi");
    const cancelbtn=document.querySelector(".cancel")

    //make the navbar ONLY appear when navi is clicked (solved)
    document.querySelector(".multimedia").onclick =function(){
        location.href="multimedia.html"
    }
    document.querySelector(".marketing").onclick=function(){
        location.href="marketing.html"
    }
    document.querySelector(".transport").onclick=function(){
        location.href="transport.html"}
    document.querySelector(".health").onclick=function(){
            location.href="health.html"
    }
    document.querySelector(".agriculture").onclick=function(){
        location.href="agriculture.html" }
        document.querySelector(".multimedia").onclick =function(){
            location.href="multimedia.html"
        }
        document.querySelector(".marketing").onclick=function(){
            location.href="marketing.html"
        }
        document.querySelector(".transport").onclick=function(){
            location.href="transport.html"}
        document.querySelector(".health").onclick=function(){
                location.href="health.html"
        }
       
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
   
   