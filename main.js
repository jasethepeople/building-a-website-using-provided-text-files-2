document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Placeholder for flocking birds animation (from previous step)
    const canvas = document.getElementById("boids-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth * 0.8; // Adjust as needed
        canvas.height = 300; // Adjust as needed

        // Simple boids animation (replace with actual boids.js integration if needed)
        let boids = [];
        const numBoids = 50;
        for (let i = 0; i < numBoids; i++) {
            boids.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 2
            });
        }

        function drawBoids() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(200, 200, 255, 0.7)"; // Light blue, slightly transparent
            boids.forEach(boid => {
                ctx.beginPath();
                ctx.arc(boid.x, boid.y, boid.size, 0, Math.PI * 2);
                ctx.fill();

                // Move boids
                boid.x += boid.vx;
                boid.y += boid.vy;

                // Boundary check
                if (boid.x < 0 || boid.x > canvas.width) boid.vx *= -1;
                if (boid.y < 0 || boid.y > canvas.height) boid.vy *= -1;
            });
            requestAnimationFrame(drawBoids);
        }
        drawBoids();
    }

    // Placeholder for pause sound button functionality
    const pauseSoundBtn = document.getElementById("pause-sound-btn");
    if (pauseSoundBtn) {
        pauseSoundBtn.addEventListener("click", function() {
            alert("Sound paused/played (functionality to be implemented).");
        });
    }

    // Placeholder for contact form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Contact form submitted (backend functionality to be implemented to send email to jasonclarkagain@gmail.com).");
        });
    }

    // Placeholder for donation functionality
    const donateSection = document.getElementById("donate");
    if (donateSection) {
        // Add donation buttons or links here
    }

    // Scroll animations for sections
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // it is the viewport
        threshold: 0.1, // 10% of the section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});

