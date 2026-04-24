
const dot = document.getElementById('dot'), ring = document.getElementById('ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px'
});

function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing)
}

animRing();
document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        dot.style.width = '16px';
        dot.style.height = '16px';
        ring.style.width = '50px';
        ring.style.height = '50px'
    });
    el.addEventListener('mouseleave', () => {
        dot.style.width = '8px';
        dot.style.height = '8px';
        ring.style.width = '32px';
        ring.style.height = '32px'
    });
});

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target)

        }
    })
}, { threshold: 0.1 });

reveals.forEach(el => obs.observe(el));

document.querySelectorAll('.project-card,.exp-card,.ach-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('flash');
        setTimeout(() => card.classList.remove('flash'), 300)

    })
});

const sections = document.querySelectorAll('section[id]');

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id

    }); navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--red)' : ''
    })
});
