// Menu ativo
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

// Animação ao rolar
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate, .animar');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Executa quando a página carregar e ao rolar
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    // Abrir modal ao clicar no produto
    const products = document.querySelectorAll('.produto img');
    products.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    // Fechar modal no botão X
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar clicando fora da imagem
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

