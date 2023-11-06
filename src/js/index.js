const hamburgerBtn = document.querySelector('.hamburger-btn');
const navBtnBars = document.querySelectorAll('.hamburger-btn__bar');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__item');
const allLinks = document.querySelectorAll('.nav__link');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');
const bars = Array.from(navBtnBars);

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    hamburgerBtn.classList.toggle('hamburger-btn--open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        hamburgerBtn.classList.toggle('hamburger-btn--open');
    })
})

const handleBtnColor = () => {
    const currentPosition = window.scrollY;
    if (!hamburgerBtn.classList.contains('hamburger-btn--open')) {

        allSections.forEach(section => {
            if (section.classList.contains('section--dark') && section.offsetTop <= currentPosition + 60) {
                bars.map(bar => bar.classList.add('bars-light'))
            }
            else if ((!section.classList.contains('section--dark') && section.offsetTop <= currentPosition + 60) || currentPosition < 50) {
                bars.map(bar => bar.classList.remove('bars-light'))
            }
        })
    }
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();


const scrollSpy = () => {
    allSections.forEach((section, i) => {
        if (i === allSections.length - 1) {
            if (window.scrollY + window.innerHeight - 60 > section.offsetTop) {
                allLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`a[href='#${section.id}']`).classList.add('active');
            }
        } else {
            if (window.scrollY + 60 > section.offsetTop && window.scrollY + 60 < section.offsetTop + section.offsetHeight) {
                allLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`a[href='#${section.id}']`).classList.add('active');
            }
        }
    })
}

window.onscroll = () => scrollSpy();
window.onload = () => scrollSpy();
window.onresize = () => scrollSpy();

window.addEventListener('scroll', handleBtnColor);