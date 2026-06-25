const loginForm =
document.getElementById(
    'loginForm'
);

loginForm.addEventListener(
    'submit',

    async (event) => {

        event.preventDefault();

        const loginDetails = {

            email:
            document
            .getElementById('email')
            .value,

            password:
            document
            .getElementById('password')
            .value
        };

        try {

            const response =
            await axios.post(

                'http://localhost:3000/user/login',

                loginDetails

            );

            alert(
                response.data.message
            );

        }

        catch (err) {

            if (
                err.response &&
                err.response.status === 404
            ) {

                alert(
                    'User not found'
                );

            }

            else if (
                err.response &&
                err.response.status === 401
            ) {

                alert(
                    'User not authorized'
                );

            }

            else {

                alert(
                    'Something went wrong'
                );

            }

        }

    }
);