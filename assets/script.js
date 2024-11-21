

const navbar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('navbar-padding');
        navbar.classList.add('navbar-padding-remove');
    } else {
        navbar.classList.remove('navbar-padding-remove');
        navbar.classList.add('navbar-padding');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const navEl = document.querySelector('.navigation-bar');
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY > 56) {
            navEl.classList.add('is-scrolled');
        } else {
            navEl.classList.remove('is-scrolled');
        }
    });
});

var options = {
    strings: [
        'Setup', 
        'Install',
        'Clean',
        'Maintain',
        'Aquascape',
        'Design',
    ],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
    loopCount: Infinity
};

var typed = new Typed('#hero-titles', options);

document.querySelectorAll('.input-field select').forEach(function(select) {
    select.addEventListener('change', function() {
        if (select.value) {
            select.classList.add('has-value');
        } else {
            select.classList.remove('has-value');
        }
    });
    if (select.value) {
        select.classList.add('has-value');
    }
});

function calculateCost() {
    const cleaningSetup = document.getElementById('cleaningSetup').value.split(',').map(Number);
    const repairType = document.getElementById('repairType').value.split(',').map(Number);
    const reglassType = document.getElementById('reglassType').value.split(',').map(Number);
    const distance = document.getElementById('distance').value.split(',').map(Number);

    const totalCostMin = cleaningSetup[0] + repairType[0] + reglassType[0] + distance[0];
    const totalCostMax = cleaningSetup[1] + repairType[1] + reglassType[1] + distance[1];

    const validCostMin = isNaN(totalCostMin) ? 0 : totalCostMin;
    const validCostMax = isNaN(totalCostMax) ? 0 : totalCostMax;

    document.getElementById('totalCost').textContent = '₱' + validCostMin.toLocaleString("en-PH");
    document.getElementById('totalCostMax').textContent = '₱' + validCostMax.toLocaleString("en-PH");
}

function clearFields() {
    document.getElementById('cleaningSetup').selectedIndex = 0;
    document.getElementById('repairType').selectedIndex = 0;
    document.getElementById('reglassType').selectedIndex = 0;
    document.getElementById('distance').selectedIndex = 0;

    const selects = document.querySelectorAll('.input-field select');
    selects.forEach(select => {
        select.classList.remove('has-value');
    });

    document.getElementById('totalCost').textContent = '₱0';
    document.getElementById('totalCostMax').textContent = '₱0';
}


setTimeout(function() {
    $(".preloader").fadeOut("slow");
}, 1000); // Delay in milliseconds (1 second)


// EMAIL JS
function sendMail() {
    // Get form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields before submitting.");
      return;  // Prevent email from being sent
    }

    // Validate email format (check if it contains "@gmail.com")
    if (!email.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address.");
      return; // Prevent email from being sent
    }

    // If all fields are filled and the email is valid, proceed with sending the email
    let parms = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_emv5iqe", "template_98vajbz", parms)
      .then(function(response) {
        alert("Email Sent!");
      }, function(error) {
        alert("There was an error sending your email.");
      });
  }

  // Get the textarea element
  const textArea = document.querySelector('.contact-input');

  // Check for input and add/remove the class based on content
  textArea.addEventListener('input', () => {
    if (textArea.value.trim() !== '') {
      textArea.classList.add('has-text');
    } else {
      textArea.classList.remove('has-text');
    }
  });