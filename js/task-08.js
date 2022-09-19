const form = document.querySelector('.login-form');
console.log(form.elements);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let inputValues = [form.elements.email.value, form.elements.password.value];
  const isEmpty = inputValues.every(elem => {
    return elem != '' && elem != null;
  });
  console.log(isEmpty);
  if (!isEmpty) {
    alert('Все поля должны быть заполнены!');
    return;
  }
  const obj = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(obj);
  form.reset();
});
