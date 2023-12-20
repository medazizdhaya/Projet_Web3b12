// script.js

document.addEventListener("DOMContentLoaded", function() {
  
    const form = document.querySelector('.contact form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const fullName = form.querySelector('input[name="fullName"]').value.trim();
      const emailAddress = form.querySelector('input[name="emailAddress"]').value.trim();
      const mobileNumber = form.querySelector('input[name="mobileNumber"]').value.trim();
      const emailContent = form.querySelector('input[name="emailContent"]').value.trim();
  
      if (!fullName || !emailAddress || !mobileNumber || !emailContent) {
        alert('Please fill in all the fields.');
        return;
      }
    
      alert('Form submitted successfully!');
    });
  });
  
  /**
   * FORM VALIDATION
   */

  // Fonction pour vérifier le nom
  function validateName() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();

    if (nameValue === "") {
      alert("Veuillez entrer votre nom.");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier l'email
  function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();

    // Expression régulière pour valider l'email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "" || !emailRegex.test(emailValue)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier le sujet
  function validateSubject() {
    var subjectInput = document.getElementById("subject");
    var subjectValue = subjectInput.value.trim();

    if (subjectValue === "") {
      alert("Veuillez entrer le sujet.");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier le message
  function validateMessage() {
    var messageInput = document.getElementById("message");
    var messageValue = messageInput.value.trim();

    if (messageValue === "") {
      alert("Veuillez entrer votre message.");
      return false;
    }

    return true;
  }

  // Fonction de validation globale du formulaire
  function validateForm() {
    return (
      validateName() &&
      validateEmail() &&
      validateSubject() &&
      validateMessage()
    );
  }

  // Écouteur d'événement pour le soumission du formulaire
  var form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Empêcher l'envoi du formulaire s'il n'est pas valide
    }
  });
