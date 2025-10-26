
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  emailjs.init("Z1TzbAAUDqeL5k5sT"); 
  emailjs.sendForm("service_77zozkv", "template_b5u55ep", this) 
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you! I will get back to you shortly.',
        confirmButtonColor: '#008075'
      });
      this.reset(); 
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#ff4d4d'
      });
      console.error('EmailJS error:', error);
    });
});
