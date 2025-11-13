// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');

 
  function validPhone(value) {
    if (!value) return true; 
    
    const re = /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    return re.test(value.replace(/\s+/g, ''));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const phone = data.get('phone')?.trim();

    
    if (!validPhone(phone)) {
      alert('Пожалуйста, введите корректный номер телефона (например: +7 (701) 123-45-67).');
      document.getElementById('phone').focus();
      return;
    }

    
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const consent = form.querySelector('#consent').checked;

    if (!name || !email || !consent) {
      alert('Пожалуйста, заполните обязательные поля и подтвердите согласие на обработку данных.');
      return;
    }

    
    alert('Спасибо! Ваша анкета принята.');
    form.reset();
  });
});