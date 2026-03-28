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
     // --- NEW: Copy Email Functionality ---
    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');
    
    // ENTER YOUR EMAIL ADDRESS HERE
    const emailToCopy = "admin@mxmdev.com"; 

    if (copyBtn && toast) {
        // Update the button text to show your email
        copyBtn.textContent = emailToCopy;

        copyBtn.addEventListener('click', () => {
            // Copy text to clipboard
            navigator.clipboard.writeText('moutumichael@gmail.com').then(() => {
                // Show the toast notification
                toast.classList.add('show');

                // Hide the toast after 2 seconds
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback: Just alert if clipboard API fails (rare)
                alert("Could not copy email. Please copy it manually.");
            });
        });
    }

    // 3. Optional: Console log to confirm script loaded
    console.log('Development page loaded successfully.');
});