function scrollToOrder() {
  // Используем метод scrollIntoView() для прокрутки к секции с id "myFooter"
  document
    .getElementById('customer-order')
    .scrollIntoView({ behavior: 'smooth' });
}
