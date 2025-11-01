$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [  "Web Designer" , "Web Developer", "Freelancer" , "Laravel Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Web Designer" , "Web Developer", "Freelancer" , "Laravel Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


function run(submit){
   

    let name  = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let subject  = document.getElementById("subject").value;
    let msg  = document.getElementById("msg").value;

    // clear previous messages
    document.getElementById("usermsg").innerHTML = "";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("subjectmsg").innerHTML = "";
    document.getElementById("message").innerHTML = "";

    document.getElementById("name").style.border = "";
    document.getElementById("email").style.border = "";
    document.getElementById("subject").style.border = "";
    document.getElementById("msg").style.border = "";

    let isValid = true;

    if(name === ""){
        document.getElementById("usermsg").innerHTML = "This field is required";
        document.getElementById("name").style.border = "1px solid red";
        isValid = false;
    }

    if(email === ""){
        document.getElementById("emailmsg").innerHTML = "This field is required";
        document.getElementById("email").style.border = "1px solid red";
        isValid = false;
    }

    // if(subject === ""){
    //     document.getElementById("subjectmsg").innerHTML = "This field is required";
    //     document.getElementById("subject").style.border = "1px solid red";
    //     isValid = false;
    // }

    if(msg === ""){
        document.getElementById("message").innerHTML = "This field is required";
        document.getElementById("msg").style.border = "1px solid red";
        isValid = false;
    }

    if(isValid){
        alert("Form has been submitted successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("msg").value = "";
    }
}