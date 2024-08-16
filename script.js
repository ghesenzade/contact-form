document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(function(elem) {
        elem.style.display = 'none';
    });

    let isValid = true;

    let firstName = document.getElementById('first-name').value.trim();
    let nameRegex = /^[A-Za-z\s]+$/;

    if(!firstName || !nameRegex.test(firstName)){
      document.getElementById('first-name-error').style.display = 'block';
      isValid = false;
    }

    let lastName = document.getElementById('last-name').value.trim();
    if(!lastName || !nameRegex.test(lastName)){
      document.getElementById('last-name-error').style.display = 'block';
      isValid = false;
    }

    let email = document.getElementById('email').value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email)){
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    }

    let queryType = document.getElementById('query-type').value;
    if(!queryType){
      document.getElementById('query-type-error').style.display = 'block';
      isValid = false;
    }

    let message = document.getElementById('message').value.trim();
    let messageRegex = /^[A-Za-z0-9\s.,!?'"()]{10,}$/;

    if(!message || !messageRegex.test(message)){
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    }


    let consent = document.getElementById('consent').checked;
    if(!consent){
      document.getElementById('consent-error').style.display = 'block';
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-message').classList.remove('hidden');
    }
  });
  