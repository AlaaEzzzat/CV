window.onload = function () {
    var mytext;
    var i = 0;
    mytext = "Hello! i build Web interfaces.";
    document.getElementById("span1").textContent = "<code>";
    document.getElementById("span2").textContent = "</code>";
    var typer = setInterval(function () {
        document.getElementById("typing").textContent += mytext[i];
        i++;
        if (i > mytext.length - 1) {
            clearInterval(typer);
            i = 0;
        }
    }, 100);
    /* ***************************************** */
    function activeLink() {
        let allTabs = document.querySelectorAll(".nav-link");
        for (let i = 0; i < allTabs.length; i++) {
            document.querySelectorAll(".nav-link")[i].addEventListener("click", function () {
                for (let i = 0; i < allTabs.length; i++) {
                    allTabs[i].classList.remove("myActive");
                }
                this.classList.add("myActive");
            })
        }
    }
    activeLink();
    /* ****************************************************************** */
    /* Fly */
    /*  let flyPx = 0;
     var fly = setInterval(function () {
             if (flyPx < 50) {
                 for (let i = 0; i < 50; i++) {
                     flyPx = flyPx + 1
                     var transformation = `transform: translateY(${flyPx}px);`
                     document.getElementsByClassName("imgContainer")[0].setAttribute("style", transformation);
                 }
             } else if (flyPx >= 50) {
                 for (let i = 0; i < 50; i++) {
                     flyPx = flyPx - 1
                     var transformation = `transform: translateY(${flyPx}px);`
                     document.getElementsByClassName("imgContainer")[0].setAttribute("style", transformation);
                 }
             }
         },
         100) */
}
/* ************************************************************** */
/*loaders*/
var years = 0,
    projects = 0,
    customer = 0,
    arabic = 0,
    english = 0,
    frensh = 0,
    C1 = 292,
    C2 = 292,
    C3 = 292;

function timer() {
    if (window.document.getElementById("years").innerHTML >= 4) {
        window.clearInterval(timer);
    } else {
        years = years + 1;

        window.document.getElementById("years").innerHTML = years;
    }

    if (window.document.getElementById("projects").innerHTML >= 20) {
        window.clearInterval(timer);
    } else {
        projects = projects + 1;
        window.document.getElementById("projects").innerHTML = projects;
    }

    if (window.document.getElementById("customer").innerHTML >= 15) {
        window.clearInterval(timer);
    } else {
        customer = customer + 1;

        window.document.getElementById("customer").innerHTML = customer;
    }
}
window.setInterval(timer, 200);

function lang() {
    if (window.document.getElementById("ar").innerHTML >= 100) {
        if (C1 <= 0) {
            window.document.getElementById("crAr").style.strokeDashoffset = 0;
            window.clearInterval(lang);
        } else {
            C1 = C1 - 5;
            window.document.getElementById("crAr").style.strokeDashoffset = C1;

        }
    } else {
        arabic = arabic + 2;
        window.document.getElementById("ar").innerHTML = arabic;
        C1 = C1 - 5;
        window.document.getElementById("crAr").style.strokeDashoffset = C1;
    }

    if (window.document.getElementById("en").innerHTML >= 76) {
        if (C2 <= 73) {
            window.clearInterval(lang);
        } else {
            C2 = C2 - 5;
            window.document.getElementById("crEn").style.strokeDashoffset = C2;
        }
    } else {
        english = english + 2;
        window.document.getElementById("en").innerHTML = english;
        C2 = C2 - 5;
        window.document.getElementById("crEn").style.strokeDashoffset = C2;
    }

    if (window.document.getElementById("fr").innerHTML >= 40) {
        if (C3 <= 200) {
            window.clearInterval(lang);
        } else {
            C3 = C3 - 2;
            window.document.getElementById("crFr").style.strokeDashoffset = C3;
        }
    } else {
        frensh = frensh + 1;
        window.document.getElementById("fr").innerHTML = frensh;
        C3 = C3 - 2;
        window.document.getElementById("crFr").style.strokeDashoffset = C3;
    }
}

function makeReveal() {
        if (window.scrollY >= document.getElementsByClassName("imgContainer")[0].offsetTop ) {
            document.getElementsByClassName("imgContainer")[0].classList.add("reveal");
        } else {
            document.getElementsByClassName("imgContainer")[0].classList.remove("reveal");
        }
    ;
}
window.addEventListener("scroll", function () {

        makeReveal();
    /* Sycn tab color with Section */
    let allTabs = document.querySelectorAll(".nav-link");
    let allSections = document.querySelectorAll("section");
    for (let i = 0; i < allSections.length; i++) {
        if (window.scrollY >= allSections[i].offsetTop) {
            for (let x = 0; x < allTabs.length; x++) {
                if (allTabs[x].innerHTML.toLowerCase() == allSections[i].id.toLowerCase()) {
                    for (let y = 0; y < allTabs.length; y++) {
                        allTabs[y].classList.remove("myActive");
                    }
                    allTabs[x].classList.add("myActive");
                }
            }
        }
    }
    /* ******************************************************************* */
    if (window.innerWidth <= 767) {

        if (this.scrollY >= this.document.getElementById("Contact").offsetTop) {
            document.getElementsByClassName("imgContainer")[0].setAttribute("style", "transform: translate(0px, 0px) scale(1); transition-duration: 2s;")
        } else {
            document.getElementsByClassName("imgContainer")[0].setAttribute("style", "transform: translate(-50px, -30px) scale(.5); transition-duration: 2s;")
        }
        if (this.scrollY >= 965) {
            window.setInterval(lang, 100);
        }
    } else {
        if (this.scrollY >= this.document.getElementById("Contact").offsetTop) {
            document.getElementsByClassName("imgContainer")[0].setAttribute("style", "transform: translate(0, 0) scale(1); transition-duration: 2s;")
        } else {
            document.getElementsByClassName("imgContainer")[0].setAttribute("style", "transform: translate(-50px, -30px) scale(.8); transition-duration: 2s;")
        }
        if (this.scrollY >= 570) {
            window.setInterval(lang, 100);
        }
    }


})
/* *********************************************************** */
/* portofolio */
function showPro(ele) {
    console.log(ele.getAttribute("data-item"))
    let pro = ele.getAttribute("data-item");
    let all = document.querySelectorAll(".proContainetr");
    if (pro == "all") {
        for (let i = 0; i < all.length; i++) {
            all[i].setAttribute("style", "animation:fadeIn;animation-duration: 3s;animation-direction: normal; opacity:1");
        }
    } else {
        for (let i = 0; i < all.length; i++) {
            all[i].setAttribute("style", "animation:fadeOut;animation-duration: 3s;animation-direction: normal; display:none");
        }
        for (let i = 0; i < all.length; i++) {
            if (all[i].children[pro]) {
                all[i].setAttribute("style", "animation:fadeIn;animation-duration: 3s;animation-direction: normal; opacity:1");
            }
        }
    }
}
/* ************************************************************************** */
function play(){
    var audio = document.getElementById("audio");
    if(audio.innerHTML == ""){
        audio.innerHTML = `<audio autoplay controls>
                    <source src="audio/lindia2.mp3">
                </audio>`
    }else{
        audio.innerHTML = ""
    }
}