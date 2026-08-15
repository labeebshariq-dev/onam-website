// ======================================
// ONAM AI ANIMATED WEBSITE
// ======================================

// Create floating golden particles
const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    const size = 3 + Math.random() * 6;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particleContainer.appendChild(particle);
}


// ======================================
// CELEBRATE BUTTON
// ======================================

const button = document.getElementById("celebrateBtn");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {

    greeting.classList.add("show");

    button.innerHTML = "🌸 Happy Onam! 🌸";

    createFlowers();

    // Scroll slightly toward greeting
    greeting.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ======================================
// FLOATING FLOWERS
// ======================================

function createFlowers() {

    const flowers = ["🌼", "🌸", "🌺", "🌻", "🍃"];

    for (let i = 0; i < 30; i++) {

        const flower = document.createElement("div");

        flower.innerText =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.position = "fixed";

        flower.style.left =
            Math.random() * 100 + "vw";

        flower.style.top = "-50px";

        flower.style.fontSize =
            (18 + Math.random() * 25) + "px";

        flower.style.zIndex = "100";

        flower.style.pointerEvents = "none";

        flower.style.transition =
            "transform 4s linear, opacity 4s linear";

        document.body.appendChild(flower);

        setTimeout(() => {

            flower.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            flower.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            flower.remove();
        }, 4500);
    }
}


// ======================================
// MOUSE PARALLAX EFFECT
// ======================================

const pookalam =
    document.querySelector(".pookalam");

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    pookalam.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ======================================
// CARD REVEAL ANIMATION
// ======================================

const cards =
    document.querySelectorAll(".card");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(card);

});


// ======================================
// ONAM GREETING CONSOLE
// ======================================

console.log(`
🌸 ============================= 🌸

        HAPPY ONAM! 🌼

   ഓണം ആശംസകൾ!

   May your Onam be filled with
   happiness, prosperity & peace.

🌸 ============================= 🌸
`);