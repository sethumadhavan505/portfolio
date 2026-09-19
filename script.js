// ===============================
// MOBILE NAVIGATION
// ===============================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close mobile menu after clicking a link

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Find all elements that should animate

document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });
