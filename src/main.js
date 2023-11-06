// sidebar-menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const backdrop = document.querySelector('.backdrop');
  const heroBtn = document.querySelector('.hero-btn');
  const orderForm = document.querySelector('.your-order-form');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-close');
    backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('scroll-hiden');
  };

  const scrollToOrder = () => {
    document
      .getElementById('customer-order')
      .scrollIntoView({ behavior: 'smooth' });
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  heroBtn.addEventListener('click', scrollToOrder);

  // close-sidebar before folowing link
  mobileMenu.addEventListener('click', e => {
    if (e.target.hasAttribute('data-sidebar')) {
      toggleMenu();
    }
  });

  orderForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    openMenuBtn.setAttribute('aria-expanded', false);
    backdrop.classList.add('is-hidden');
  });
})();
