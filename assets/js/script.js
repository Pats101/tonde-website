
// const mySection = document.querySelector(".myProfile"),
//         hireBtn = mySection.querySelector("#hireBtn"),
//         closeBtn = mySection.querySelectorAll("#close");

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        } 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Toggle menu/navbar script
    $('button.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        var expanded = $('.navbar .menu').hasClass('active');
        $(this).attr('aria-expanded', expanded);
    });

    // typing animation script
    const typedHome = new Typed(".typing", {
        strings: ["a Software Engineer", "always Engineering and Developing", "a Pencil Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typedAbout = new Typed(".typing-2", {
        strings: ["a Software Engineer", "always Engineering and Developing", "a Pencil Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// hireBtn.addEventListener("click", () =>{
//    mySection.classList.add("show") 
// });

// closeBtn.forEach(cBtn => {
//     cBtn.addEventListener("click", () => {
//         mySection.classList.remove("show") 
//     });
// });

// Skills Section
const skillsContent = document.getElementsByClassName('my_skill_content'), 
        skillsHeader=document.querySelectorAll('.skill_header');
function toggleSkills(){
    let itemClass = this.parentNode.className;
    for (let p = 0; p < skillsContent.length; p++) {
        skillsContent[p].className = 'my_skill_content skills_close';        
    }
    if(itemClass === 'my_skill_content skills_close'){
        this.parentNode.className = 'my_skill_content skills_open'
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills)
})

// Qualification Section
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
});

// Portfolio Swiper
const swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".portfolio_container .swiper-button-next",
      prevEl: ".portfolio_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function(response) {
            formStatus.style.display = 'block';
            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = '#0245aa';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Something went wrong. Please try again.';
                formStatus.style.color = '#e74c3c';
            }
        }).catch(function() {
            formStatus.style.display = 'block';
            formStatus.textContent = 'Something went wrong. Please try again.';
            formStatus.style.color = '#e74c3c';
        });
    });
}

// Drawings Swiper
const swiperDrawings = new Swiper(".drawings_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".drawings_container .swiper-button-next",
      prevEl: ".drawings_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});