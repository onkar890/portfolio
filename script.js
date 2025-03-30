        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    navLinks.style.display = 'none';
                }
            });
        });

     

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

   
