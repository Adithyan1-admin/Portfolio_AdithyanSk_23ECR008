/* =====================================================
   ADITHYAN S.K PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1000);

});


/* =====================================================
   AOS ANIMATION
===================================================== */

AOS.init({

    duration: 900,

    easing: "ease-out-cubic",

    once: true,

    offset: 80

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

const words = [

    "Embedded Systems Enthusiast",

    "IoT Developer",

    "ECE Engineer",

    "Innovation Enthusiast",

    "Technology Explorer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function animateCounters() {

    if (counterStarted) return;

    const stats =
        document.querySelector(".about-stats");

    if (!stats) return;

    const position =
        stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                parseFloat(counter.dataset.target);

            const isDecimal =
                target % 1 !== 0;

            let current = 0;

            const increment =
                target / 60;

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        isDecimal
                            ? target.toFixed(2)
                            : target;

                    return;

                }

                counter.textContent =
                    isDecimal
                        ? current.toFixed(2)
                        : Math.floor(current);

                requestAnimationFrame(updateCounter);

            }

            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


if (window.innerWidth > 768) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;


    document.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

    });


    function animateFollower() {

        followerX +=
            (mouseX - followerX) * 0.15;

        followerY +=
            (mouseY - followerY) * 0.15;

        follower.style.left =
            followerX + "px";

        follower.style.top =
            followerY + "px";

        requestAnimationFrame(
            animateFollower
        );

    }


    animateFollower();


    const clickableElements =
        document.querySelectorAll(
            "a, button, .project-card, .skill-card"
        );


    clickableElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            follower.style.width = "55px";

            follower.style.height = "55px";

        });


        element.addEventListener("mouseleave", () => {

            follower.style.width = "35px";

            follower.style.height = "35px";

        });

    });

}


/* =====================================================
   PARTICLE SYSTEM
===================================================== */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];

let particleCount =
    window.innerWidth < 768 ? 35 : 75;


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 1.8 + 0.4;

        this.speedX =
            (Math.random() - 0.5) * 0.35;

        this.speedY =
            (Math.random() - 0.5) * 0.35;

    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (this.x < 0)
            this.x = canvas.width;

        if (this.x > canvas.width)
            this.x = 0;

        if (this.y < 0)
            this.y = canvas.height;

        if (this.y > canvas.height)
            this.y = 0;

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,229,255,0.55)";

        ctx.fill();

    }

}


for (
    let i = 0;
    i < particleCount;
    i++
) {

    particles.push(
        new Particle()
    );

}


function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                const opacity =
                    1 - distance / 120;

                ctx.strokeStyle =
                    `rgba(0,229,255,${opacity * 0.08})`;

                ctx.lineWidth = 1;

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}


function particleAnimation() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(particle => {

        particle.update();

        particle.draw();

    });


    connectParticles();

    requestAnimationFrame(
        particleAnimation
    );

}


particleAnimation();


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   PROJECT CARD TILT EFFECT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


if (window.innerWidth > 900) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 20;

                const rotateY =
                    (centerX - x) / 20;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


/* =====================================================
   SMOOTH ANCHOR LINKS
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});