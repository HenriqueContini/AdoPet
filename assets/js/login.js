const loginForm = document.querySelector('.login__form');
const span = document.querySelector('.login__span');
const users = JSON.parse(sessionStorage.getItem('users'));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('email-login').value;
    const loginPassword = document.getElementById('password-login').value;

    let userFound = checkUser(users, loginEmail, loginPassword);

    if (userFound) {
        window.location.href = './home.html';
    } else {
        span.classList.add('login__span--active');
    }
})

function checkUser(arrUsers, email, password) {
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i].email === email) {
            if (arrUsers[i].password === password) {
                return true;
            } else {
                return false;
            }
        }
    }

    return false;
}