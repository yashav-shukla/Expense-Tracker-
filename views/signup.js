const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const userDetails = {

        name:
        document.getElementById('name').value,

        email:
        document.getElementById('email').value,

        password:
        document.getElementById('password').value

    };

    try {

        const response = await fetch(
            'http://localhost:3000/user/signup',
            {
                method: 'POST',

                headers: {
                    'Content-Type':
                    'application/json'
                },

                body:
                JSON.stringify(userDetails)
            }
        );

        const data =
        await response.json();

        alert(data.message);

        console.log(data);

    }

    catch(err) {

        console.log(err);

    }

});