const toast = document.getElementById('toast'); 
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    toast.textContent = "Sending...";
    toast.classList.add('show');
    
    // Disable button to prevent double submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.4";
    const API_URL =
    window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "";

  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    
    if (data.success) {
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            submitBtn.style.opacity = "1";
            toast.textContent = "Message sent!";
            e.target.reset();
    } else {
      toast.textContent = "Failed to send message!";
    }
  } catch (err) {
    toast.textContent = "Error sending message!";
  }
});