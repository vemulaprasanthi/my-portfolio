// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Initialize EmailJS with your public key
  emailjs.init("Z1TzbAAUDqeL5k5sT"); // Replace with your EmailJS public key

  // Send form using EmailJS
  emailjs.sendForm("service_77zozkv", "template_b5u55ep", this) // Replace with your Template ID
    .then(() => {
      // Success alert
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you! I will get back to you shortly.',
        confirmButtonColor: '#008075'
      });
      this.reset(); // Reset form fields
    })
    .catch((error) => {
      // Error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#ff4d4d'
      });
      console.error('EmailJS error:', error);
    });
});
