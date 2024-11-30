function toggleAnswer(index) {
    const answer = document.getElementById(`answer${index}`);
    const arrow = answer.previousElementSibling.querySelector('.arrow');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        answer.style.display = "block";
        arrow.classList.add("rotate");
    }
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('header, section, form, .faq-container, footer').forEach((el) => {
    observer.observe(el);
});



