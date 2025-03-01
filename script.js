function startDetection(mode) {
    const ray = document.getElementById('mainRay');
    const results = document.getElementById('results');
 
    // Reset animations
    ray.style.animation = 'none';
    ray.offsetHeight; // Trigger reflow
    ray.style.animation = 'rayScan 2s forwards';

    // Generate pulses
    const container = document.getElementById('pulseContainer');
    container.innerHTML = '';
 
    for(let i = 0; i < 5; i++) {
        const pulse = document.createElement('div');
        pulse.className = 'ultrasonic-pulse';
        pulse.style.left = ${45 + Math.random() * 10}%;
        pulse.style.top = ${20 + i * 15}%;
        pulse.style.animation = pulse 1s ${i * 0.2}s;
        container.appendChild(pulse);
    }

    // Show results
    setTimeout(() => {
        const flaws = Math.floor(Math.random() * 5);
        const resolution = mode === 'optical' ? '0.1μm' : '0.5mm';
        results.innerHTML = `
            <h3>Scan Results (${mode.toUpperCase()})</h3>
            <p>Detected Flaws: ${flaws}</p>
            <p>Resolution: ${resolution}</p>
            <p>Scan Depth: ${mode === 'hybrid' ? '5.2m' : '3.8m'}</p>
        `;
    }, 2000);
}

// Scroll animations
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
