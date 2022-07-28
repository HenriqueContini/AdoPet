const form = document.querySelector('.sign-up__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (password.value !== confirmPassword.value) {
        return;
    }

    let accounts = JSON.parse(sessionStorage.getItem('users') || '[]');

    accounts.push({
        email: email.value,
        name: name.value,
        password: password.value
    });

    sessionStorage.setItem('users', JSON.stringify(accounts));

    email.value = '';
    name.value = '';
    password.value = '';
    confirmPassword.value = '';

    window.location.href = "https://henriquecontini.github.io/AdoPet/home.html";
})
