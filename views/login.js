const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const loginDetails = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {

        const response = await axios.post(
            'http://localhost:3000/user/login',
            loginDetails
        );

        console.log('LOGIN RESPONSE:', response.data);

        localStorage.setItem(
            'token',
            response.data.token
        );

        console.log(
            'TOKEN AFTER SAVE:',
            localStorage.getItem('token')
        );

        alert(response.data.message);

        window.location.href =
        'http://localhost:3000/expense.html';

    }

    catch (err) {

        console.log(err);

        if (
            err.response &&
            err.response.status === 404
        ) {

            alert('User not found');

        }

        else if (
            err.response &&
            err.response.status === 401
        ) {

            alert('User not authorized');

        }

        else {

            alert('Something went wrong');

        }

    }

});