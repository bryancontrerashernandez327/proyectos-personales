// ==================== PETALOS ====================

const petalsContainer = document.getElementById('petals-container');

function createPetal() {

    const petal = document.createElement('div');

    petal.classList.add('petal');

    const size = Math.random() * 12 + 8;

    petal.style.left = Math.random() * 100 + '%';
    petal.style.width = size + 'px';
    petal.style.height = size * 1.3 + 'px';

    petal.style.background =
        `rgba(255, ${150 + Math.random() * 80},
        ${170 + Math.random() * 70}, 0.75)`;

    petal.style.animationDuration =
        5 + Math.random() * 7 + 's';

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 400);

// ==================== CORAZONES ====================

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {

    const heart = document.createElement('div');

    heart.classList.add('floating-heart');

    const hearts = ['❤️', '🌸', '🌹', '✨', '💖'];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + '%';

    heart.style.fontSize =
        16 + Math.random() * 24 + 'px';

    heart.style.animationDuration =
        6 + Math.random() * 7 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 550);

// ==================== SPARKLES ====================

function createSparkle() {

    const spark = document.createElement('div');

    spark.classList.add('sparkle');

    spark.style.left =
        Math.random() * window.innerWidth + 'px';

    spark.style.top =
        Math.random() * window.innerHeight + 'px';

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 800);
}

setInterval(createSparkle, 1300);

// ==================== MUSICA ====================

const audio = new Audio();

audio.src =
'music/Billie.mp3';

audio.loop = true;
audio.volume = 0.4;

let musicPlaying = false;

const musicBtn =
document.getElementById('musicToggleBtn');

musicBtn.addEventListener('click', () => {

    if (musicPlaying) {

        audio.pause();

        musicPlaying = false;

        musicBtn.innerHTML =
        '<span class="music-icon">🎵</span><span class="music-text">Música suave</span>';

    } else {

        audio.play();

        musicPlaying = true;

        musicBtn.innerHTML =
        '<span class="music-icon">🔊</span><span class="music-text">Pausar</span>';
    }
});

// ==================== CARTA ====================

const envelope =
document.getElementById('envelope');

const letterCard =
document.getElementById('letterCard');

const closeLetterBtn =
document.getElementById('closeLetterBtn');

function openLetter() {

    envelope.classList.add('hidden');

    letterCard.classList.remove('hidden');
}

function closeLetter() {

    envelope.classList.remove('hidden');

    letterCard.classList.add('hidden');
}

envelope.addEventListener('click', openLetter);

closeLetterBtn.addEventListener('click', closeLetter);

// ==================== CARRUSEL ====================

const track =
document.getElementById('carouselTrack');

const slides =
Array.from(document.querySelectorAll('.carousel-slide'));

const prevBtn =
document.getElementById('prevBtn');

const nextBtn =
document.getElementById('nextBtn');

const indicatorsDiv =
document.getElementById('indicators');

let currentIdx = 0;
let autoInterval;

const slideCount = slides.length;

function updateCarousel() {

    const shift = -currentIdx * 100;

    track.style.transform =
    `translateX(${shift}%)`;

    updateIndicators();
}

function updateIndicators() {

    const dots =
    document.querySelectorAll('.indicator');

    dots.forEach((dot, i) => {

        dot.classList.toggle('active', i === currentIdx);
    });
}

function goToSlide(index) {

    if (index < 0) index = slideCount - 1;

    if (index >= slideCount) index = 0;

    currentIdx = index;

    updateCarousel();

    resetAutoPlay();
}

function nextSlide() {
    goToSlide(currentIdx + 1);
}

function prevSlide() {
    goToSlide(currentIdx - 1);
}

function resetAutoPlay() {

    clearInterval(autoInterval);

    autoInterval = setInterval(() => {

        nextSlide();

    }, 4500);
}

function buildIndicators() {

    indicatorsDiv.innerHTML = '';

    for (let i = 0; i < slideCount; i++) {

        const dot = document.createElement('div');

        dot.classList.add('indicator');

        if (i === currentIdx) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            goToSlide(i);
        });

        indicatorsDiv.appendChild(dot);
    }
}

buildIndicators();

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);

resetAutoPlay();

// ==================== BOTON AMOR ====================

const loveBtn =
document.getElementById('loveBtn');

loveBtn.addEventListener('click', () => {

    const toast =
    document.createElement('div');

    toast.innerText =
    '💖 ¡Te amo con todo mi corazón, mamá! 💖';

    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#ffdae3';
    toast.style.color = '#b43b61';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '50px';
    toast.style.fontWeight = 'bold';
    toast.style.fontSize = '1.2rem';
    toast.style.zIndex = '1000';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2800);

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 60);
    }
});

window.addEventListener('resize', updateCarousel);

console.log('💐 Página romántica para Mamá cargada con éxito 💐');