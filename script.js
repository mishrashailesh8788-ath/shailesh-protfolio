// ================= YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("open");

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio message from " + name
        );


    const body =
        encodeURIComponent(

            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message

        );


    window.location.href =
        "mailto:mishrashailesh8788@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;

});