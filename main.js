function checkEmailValidity() {
    const emailInput = document.getElementById("subscribe-email");
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(emailInput.value)) {
      errorMessage.innerHTML = "Oops! Please check your email";
      errorMessage.style.color = 'red'
    } else {
      errorMessage.innerHTML = "Email Request Accepted";
      errorMessage.style.color = 'green'
    }
  }