const scriptURL = 'https://script.google.com/macros/s/AKfycbwMNFCXxatDGorNeo6RkccHLXK1Q1bJ8pjbttHOYi2dZ6oIjbx9DeTPPflkZleGZIBlOQ/exec';
const form = document.forms['contactform'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    submitButton.disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your Response has been recorded, Check your mail for futher updates."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.error('Error!', error.message);
            submitButton.disabled = false;
        });
});
