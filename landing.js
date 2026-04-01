const parallaxBg = document.getElementById('parallaxBg');
const parallaxBg2 = document.getElementById('parallaxBg2');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
    }

    if (parallaxBg2) {
        const aboutSection = parallaxBg2.parentElement;
        const offsetTop = aboutSection.getBoundingClientRect().top + scrollY;
        const relativeScroll = scrollY - offsetTop;
        parallaxBg2.style.transform = `translateY(${relativeScroll * 0.3}px)`;
    }
});