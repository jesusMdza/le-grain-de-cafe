document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');

  const form = document.getElementById('myForm');
  const allRequiredFields = document.querySelectorAll('.required-field');
  const firstNameInput = form.querySelector('#f_name');
  const lastNameInput = form.querySelector('#l_name');
  const emailInput = form.querySelector('#email');
  const commentTextArea = form.querySelector('#comment');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // adds error field on submit
    function showError(inputType) {
      const errorMessage = inputType.nextElementSibling;
      if (inputType.value == '') {
        inputType.classList.add('error-field');
        errorMessage.style.display = 'block';
      }
    }

    showError(firstNameInput);
    showError(lastNameInput);
    showError(emailInput);
    showError(commentTextArea);

    // removes error field on submit
    for (let i = 0; i < allRequiredFields.length; i++) {
      allRequiredFields[i].addEventListener('input', (e) => {
        const requiredField = e.target;
        const errorMessage = requiredField.nextElementSibling;
        if (requiredField) {
          requiredField.classList.remove('error-field');
          errorMessage.style.display = 'none';
        }
      });
    }
  });
});
