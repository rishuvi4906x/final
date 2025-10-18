// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Project Modal
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const projects = {
        project1: {
            title: 'Project 1: Responsive Website',
            description: 'A detailed description of the responsive website project. Built with modern web technologies.',
            image: 'https://via.placeholder.com/600?text=Project+1+Details'
        },
        project2: {
            title: 'Project 2: Interactive App',
            description: 'This app features real-time interactions and was developed using React.',
            image: 'https://via.placeholder.com/600?text=Project+2+Details'
        },
        project3: {
            title: 'Project 3: Dashboard Design',
            description: 'A comprehensive dashboard with data visualizations and user-friendly interfaces.',
            image: 'https://via.placeholder.com/600?text=Project+3+Details'
        }
    };

    const project = projects[projectId];
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerText = project.description;
    document.getElementById('modal-image').src = project.image;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a simulation)');
    this.reset();
});

const skillsSection = document.getElementById('skills');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            skillsSection.classList.add('visible');
            
            observer.unobserve(skillsSection);
        }
    });
}, { threshold: 0.5 });
observer.observe(skillsSection);
