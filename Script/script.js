document.addEventListener("DOMContentLoaded", function () {
  const hireMeButton = document.getElementById("hire-me-btn");

  if (hireMeButton) {
    hireMeButton.addEventListener("click", function () {
      window.open(
        "mailto:jubafper@gmail.com?subject=[Votre%20Sujet]&body=Bonjour%20Juba,%0D%0A%0D%0AJe%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20profil,%20merci%20de%20me%20contacter.%0D%0A%0D%0ACordialement,%0D%0A[Votre%20Nom]",
        "_blank"
      );
    });
  }

  // Pour scroller en bas lors de cliquer sur contact
  const contactButton = document.getElementById("scroll-to-contact-btn");
  const contactSection = document.getElementById("contact");

  if (contactButton && contactSection) {
    contactButton.addEventListener("click", function () {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Barre de progression circulaire pour HTML/CSS
  const htmlProgress = document.querySelector(".html-css");
  const htmlValue = document.querySelector(".html-progress");

  if (htmlProgress && htmlValue) {
    let htmlStartValue = 0;
    const htmlEndValue = 90;
    const htmlspeed = 30;

    const progresshtml = setInterval(() => {
      htmlStartValue++;
      htmlValue.textContent = `${htmlStartValue}%`;
      htmlProgress.style.background = `conic-gradient(#fca61f ${
        htmlStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (htmlStartValue === htmlEndValue) {
        clearInterval(progresshtml);
      }
    }, htmlspeed);
  }

  // Barre de progression circulaire pour JavaScript
  const javascriptProgress = document.querySelector(".javascript");
  const javascriptValue = document.querySelector(".javascript-progress");

  if (javascriptProgress && javascriptValue) {
    let javascriptStartValue = 0;
    const javascriptEndValue = 75;
    const jsspeed = 30;

    const progressjs = setInterval(() => {
      javascriptStartValue++;
      javascriptValue.textContent = `${javascriptStartValue}%`;
      javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
        javascriptStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (javascriptStartValue === javascriptEndValue) {
        clearInterval(progressjs);
      }
    }, jsspeed);
  }

  // Gérer l'affichage du texte supplémentaire lorsque le lien "Read More" est cliqué.
  const readMoreLinks = document.querySelectorAll(".read-more-link");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const readMoreContent = this.nextElementSibling;

      if (readMoreContent) {
        if (readMoreContent.style.display === "none") {
          readMoreContent.style.display = "block";
          this.textContent = "Read Less";
        } else {
          readMoreContent.style.display = "none";
          this.textContent = "Read More";
        }
      }
    });
  });

  // Gestion du bouton de mode sombre
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (toggleButton) {
    toggleButton.addEventListener("change", function () {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Gestion du clic sur les images de projet
  const images = document.querySelectorAll(".card-img-top");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (this.alt === "Portfolio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (link) {
        window.open(link, "_blank");
      }
    });
  });

  // Gestion de la soumission du formulaire
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;
      const inputs = contactForm.querySelectorAll("input, textarea");

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;
      const message = document.getElementById("message").value;

      const formData = {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
      };

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          input.classList.add("is-invalid");
          isValid = false;
        } else {
          input.classList.remove("is-invalid");
        }
      });

      console.log("Form data:", formData);
      console.log("Form is valid:", isValid);

      if (isValid) {
        emailjs.send("service_ju2004", "template_e16p93h", formData).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Votre message a été envoyé avec succès !");
            contactForm.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Échec de l'envoi du message. Veuillez réessayer.");
          }
        );
      }
    });

    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focusout", function () {
        if (!input.checkValidity()) {
          input.classList.add("is-invalid");
        } else {
          input.classList.remove("is-invalid");
        }
      });
    });
  } else {
    console.log("contactForm element not found");
  }

  // Barre de progression circulaire pour PHP
  const phpProgress = document.querySelector(".php");
  const phpValue = document.querySelector(".php-progress");

  if (phpProgress && phpValue) {
    let phpStartValue = 0;
    const phpEndValue = 80;
    const phpspeed = 30;

    const progressphp = setInterval(() => {
      phpStartValue++;
      phpValue.textContent = `${phpStartValue}%`;
      phpProgress.style.background = `conic-gradient(#20c997 ${
        phpStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (phpStartValue === phpEndValue) {
        clearInterval(progressphp);
      }
    }, phpspeed);
  }

  // Barre de progression circulaire pour ReactJS
  const reactProgress = document.querySelector(".reactjs");
  const reactValue = document.querySelector(".reactjs-progress");

  if (reactProgress && reactValue) {
    let reactStartValue = 0;
    const reactEndValue = 30;
    const rjsspeed = 30;

    const progressreact = setInterval(() => {
      reactStartValue++;
      reactValue.textContent = `${reactStartValue}%`;
      reactProgress.style.background = `conic-gradient(#3f396d ${
        reactStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (reactStartValue === reactEndValue) {
        clearInterval(progressreact);
      }
    }, rjsspeed);
  }

  // Filtrage des éléments de projet en fonction du clic
  const filterItems = document.querySelectorAll(".filter-item");
  const posts = document.querySelectorAll(".post");

  if (filterItems && posts) {
    filterItems.forEach((item) => {
      item.addEventListener("click", function () {
        const value = this.getAttribute("data-filter");
        if (value === "all") {
          posts.forEach((post) => (post.style.display = "block"));
        } else {
          posts.forEach((post) => {
            if (post.classList.contains(value)) {
              post.style.display = "block";
            } else {
              post.style.display = "none";
            }
          });
        }
      });
    });
  }

  // Scroll Navbar
  const navbar = document.getElementById("navbar-top");

  if (navbar) {
    window.addEventListener("scroll", function () {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 50) {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "block";
      }
    });
  }

  // Fonctionnalité du bouton "Retour en haut"
  const mybutton = document.getElementById("btn-back-to-top");

  if (mybutton) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    mybutton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  } else {
    console.log("btn-back-to-top element not found");
  }
});
