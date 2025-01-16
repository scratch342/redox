var routeButton = document.querySelectorAll('.sign-up');
var tutorsButton = document.querySelectorAll('.tutors');
var servicesButton = document.querySelectorAll('.services');
var toggler = document.querySelector('.navbar-toggler');
var navText = document.querySelectorAll('.nav-link');

for(var i = 0; i < routeButton.length; i++){
    routeButton[i].addEventListener("click", function(){
        window.open("https://forms.gle/JQ9mRkFdxdmUmwMj9", "_blank");
    })
}

for(var i = 0; i < tutorsButton.length; i++){
    tutorsButton[i].addEventListener("click", function(){
        window.location.href = "tutors.html";
    })
}

for(var i = 0; i < servicesButton.length; i++){
    servicesButton[i].addEventListener("click", function(){
        window.location.href = "services.html";
    })
}


toggler.onclick = function(){
    for(var i = 0; i < navText.length; i++){
        navText[i].style.backgroundColor = "#423e43";
        console.log(navText[i])
    }
}