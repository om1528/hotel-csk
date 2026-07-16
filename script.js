/* ===========================
   MOBILE MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ===========================
   STICKY NAVBAR
=========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ===========================
   ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ===========================
   SCROLL ANIMATION
=========================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".food-card,.special-card,.service-card,.why-card,.review-card,.feature,.stat-box"

).forEach(el=>{

observer.observe(el);

});


/* ===========================
   IMAGE ZOOM
=========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});


/* ===========================
   FAQ EFFECT
=========================== */

document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("open");

});

});


/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ===========================
   COUNTER
=========================== */

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.innerText.replace(/\D/g,'');

let count=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/100);

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

counter.innerText=count+"+";

setTimeout(updateCounter,25);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

});


/* ===========================
   CURRENT YEAR
=========================== */

const year=document.querySelector(".year");

if(year){

year.innerHTML=new Date().getFullYear();

}


/* ===========================
   CONSOLE
=========================== */

console.log("Hotel CSK Website Loaded Successfully");