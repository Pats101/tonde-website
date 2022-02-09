const mySection = document.querySelector(".myProfile"),
        hireBtn = mySection.querySelector("#hireBtn"),
        closeBtn = mySection.querySelectorAll("#close");

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        } 
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["a Software Developer", "always Developing", "a Pencil Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // typing animation script
    var typed = new Typed(".typing-2", {
        strings: ["a Software Developer", "always Developing", "a Pencil Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

hireBtn.addEventListener("click", () =>{
   mySection.classList.add("show") 
});

closeBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () => {
        mySection.classList.remove("show") 
    });
})