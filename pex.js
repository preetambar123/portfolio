function myMenuFunction(){
    var menubth = document.getElementById("myMenuFunction");

    if (menubth.className === "nav-menu"){
        menubth.className += "responsive";
    }
    else{
        menubth.className = "nav-menu";
    }
}

/*---dark mode---*/
const body = document.querySelector("body"),
   toggleSwitch = document.getElementById("toggle-switch");

   toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
   });

/*----typing effect----*/
var typingEffect = new Typed(".typedText",{
    strings: ["desiner..." , "coder..." , "developer..."],

    loop : true,
    typeSpeed : 50,
    backSpeed : 80,
    backDelay : 2000,
  
 })

/*----scroll animation ---*/
const sr = ScrollReveal({
    origin: "top",
    distance : "80px",
    duration: 2000,
    reset : true,
});

sr.reveal(".featured-name", {dealy : 100});
sr.reveal(".text-info", {dealy : 100});
sr.reveal(".text-btn", {dealy : 100});
sr.reveal(".social-icons", {dealy : 100});
sr.reveal(".featured-image", {dealy : 100});
sr.reveal(".project-box", {dealy : 100});
sr.reveal(".top-header" ,{});
const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srLeft.reveal(".about-info",{dealy: 100});
srLeft.reveal(".contact-info",{delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srRight.reveal(".skill",{dealy: 100});
srRight.reveal(".skill-box",{dealy: 100});


/*----acttive-link----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId =current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document
                    .querySelector(".nav-menu a[helf*=" + sectionId + "]")
                    .classList.add("active-link");
        }else{
            document
                    .querySelector(".nav-menu a[href*=" +sectionId+ "]")
                    .classList.remove("active-link");

        }
    });
}

window.addEventListener("scroll", scrollActive);
