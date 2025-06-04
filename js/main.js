

const integrantes = document.getElementsByClassName('integrante');



for (let integrante of integrantes) {
    integrante.addEventListener('click', function () {
        const isActive = integrante.classList.contains('integrante-active');

        for (let int of integrantes) {
            int.classList.remove('integrante-active');
        }
        if (!isActive) {
            integrante.classList.add('integrante-active');  
            } else {
            integrante.classList.remove('integrante-active');
        };
        saturacaoIntegrante();
    });
};

function saturacaoIntegrante() {
    // Verifica se existe algum integrante ativo
    const algumAtivo = document.querySelector('.integrante-active') !== null;

    for (let integrante of integrantes) {
        if (algumAtivo) {
            // Se tem algum ativo, dessatura os inativos
            if (!integrante.classList.contains('integrante-active')) {
                integrante.style.filter = 'saturate(0)';
            } else {
                integrante.style.filter = 'none'; // Ativo fica normal
            }
        } else {
            // Se nenhum está ativo, todos ficam normais
            integrante.style.filter = 'none';
        }
    }
}




// JavaScript para detectar scroll e adicionar a classe 'visible'
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Opcional: para não repetir
            }
        });
    }, { threshold: 0.4 }); // Dispara quando 10% do elemento estiver visível

    fadeElements.forEach(el => observer.observe(el));
});




const hamburger = document.getElementById('open');
const closeNav = document.getElementById('close');
const navList = document.getElementById('nav-list')
const navItem = document.querySelectorAll('#nav-list a')




hamburger.addEventListener('click', () => {
  navList.classList.add('active');
  hamburger.style.display = 'none';
  closeNav.style.display = 'inline';
});

closeNav.addEventListener('click', () => {
  navList.classList.remove('active');
  hamburger.style.display = 'inline';
  closeNav.style.display = 'none';
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.style.display = 'inline';
        closeNav.style.display = 'none';
    });
});