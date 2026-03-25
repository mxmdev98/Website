document.addEventListener('DOMContentLoaded', () => {
    // 1. Update the Copyright Year automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Randomize the progress bar width on load 
    // to make the page feel active (between 60% and 90%)
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const randomPercent = Math.floor(Math.random() * (90 - 60 + 1) + 60);
        // We set a small timeout to ensure the CSS transition triggers
        setTimeout(() => {
            progressBar.style.width = `${randomPercent}%`;
        }, 100);
    }

    // 3. Optional: Console log to confirm script loaded
    console.log('Development page loaded successfully.');
});