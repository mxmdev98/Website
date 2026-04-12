document.addEventListener('DOMContentLoaded', () => {
       
      // --- Pre-fill Qutotation Message Field based on URL Service (Services Page)---
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('service');
    const messageBox = document.getElementById('message');

    if (selectedService && messageBox) {
        // Fill the message box with the selected service
        messageBox.value = `Hi MXM Dev Team, I am interested in the pricing for your ${selectedService}. Please let me know at your earliest so we can get to discuss the details of my project.`;
        messageBox.setAttribute('readonly', 'readonly'); // Make it read-only to prevent editing
    }
   
    // Update the Copyright Year automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Randomize the progress bar width on load 
    // to make the page feel active (between 60% and 90%)
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const randomPercent = Math.floor(Math.random() * (90 - 60 + 1) + 60);
        //set a small timeout to ensure the CSS transition triggers
        setTimeout(() => {
            progressBar.style.width = `${randomPercent}%`;
        }, 100);
    }
     //Copy Email Functionality ---
    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');
    
    // ENTER EMAIL ADDRESS HERE
    const emailToCopy = "Send us an email"; 

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
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback: Just alert if clipboard API fails 
                alert("Could not copy email. Copy email address from Contact Us Page.");
            });
        });
    }

    //Console log to confirm script loaded
    console.log('Development page loaded successfully.');

});