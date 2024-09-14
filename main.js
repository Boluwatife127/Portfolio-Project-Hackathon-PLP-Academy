window.onload = function() {
    const img = document.querySelector('.contents img');
    const text = document.querySelector('.text');
    const paragraphs = text.querySelectorAll('p, h1, h2');

    // Image floats up
    img.style.opacity = 1;

    // Sequential animation for text elements
    setTimeout(() => {
        paragraphs[0].style.opacity = 1;
        paragraphs[0].style.transform = 'translateX(0)';
        setTimeout(() => {
            paragraphs[1].style.opacity = 1;
            paragraphs[1].style.transform = 'translateX(0)';
            setTimeout(() => {
                paragraphs[2].style.opacity = 1;
                paragraphs[2].style.transform = 'translateX(0)';
            }, 500); // Delay for the third element
        }, 500); // Delay for the second element
    }, 1500); // Delay to allow the image float animation to complete
};

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navigation h3');
    const contentsDiv = document.querySelector('.contents');

    // Save the home page content to restore it later
    const homeContent = `
        <center><img src="images/B.png" alt="My Logo" style="margin-top: 70px;"></center>
        <div class="text">
            <p>MY NAME IS</p>
            <h1>Boluwatife Babalola</h1>
            <h2>Front End Developer, Writer, Designer</h2>
        </div>
    `;

    // Function to load the content of the clicked section
    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                contentsDiv.innerHTML = data; // Load new content
            })
            .catch(error => {
                console.error('Error loading content:', error);
                contentsDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }

    // Function to set the active class
    function setActiveLink(activeId) {
        links.forEach(link => {
            if (link.id === activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialize with home link as active
    setActiveLink('home-link');

    // Event listener for each navigation link
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Set the active link
            setActiveLink(this.id);

            // Load the corresponding content based on the clicked link
            let section = this.id.split('-')[0];  // Extract the section name (e.g., "home", "about")

            if (section === 'home') {
                contentsDiv.innerHTML = homeContent; // Restore home content
                // Ensure animations are applied when reloading content
                const img = document.querySelector('.contents img');
                const text = document.querySelector('.text');
                const paragraphs = text.querySelectorAll('p, h1, h2');
                
                // Reapply image float-up animation
                img.style.animation = 'none'; // Reset animation
                img.offsetHeight; // Trigger reflow
                img.style.animation = 'floatUp 1.5s ease forwards'; // Reapply animation

                // Reset text animations
                paragraphs.forEach(paragraph => {
                    paragraph.style.opacity = 0;
                    paragraph.style.transform = 'translateX(-100%)';
                });

                // Reapply text animations
                setTimeout(() => {
                    paragraphs[0].style.opacity = 1;
                    paragraphs[0].style.transform = 'translateX(0)';
                    setTimeout(() => {
                        paragraphs[1].style.opacity = 1;
                        paragraphs[1].style.transform = 'translateX(0)';
                        setTimeout(() => {
                            paragraphs[2].style.opacity = 1;
                            paragraphs[2].style.transform = 'translateX(0)';
                        }, 500); // Delay for the third element
                    }, 500); // Delay for the second element
                }, 1500); // Delay to allow the image float animation to complete
            } else {
                loadContent(section); // Load other section content
            }
        });
    });
});


//About section Javascript

window.addEventListener('load', () => {
    const aboutSections = document.querySelectorAll('.about section');
    aboutSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.7}s`; // Staggering the animation for each section
    });
});
