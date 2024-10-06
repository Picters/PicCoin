let counter = 0;
let multiplier = 1;
let money = 0;

function incrementCounter(event) {
    counter += 1 * multiplier;
    document.getElementById('counter').textContent = counter;
    updateMoney();
    playSound('click-sound');
    createParticle(event.clientX, event.clientY);
}

function upgradeMultiplier() {
    multiplier *= 2.5;
    document.getElementById('multiplier').textContent = multiplier.toFixed(2);
    playSound('upgrade-sound');
}

function updateMoney() {
    money = counter / 3000;
    document.getElementById('money').textContent = money.toFixed(2);
}

function playSound(soundId) {
    document.getElementById(soundId).play();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
}
