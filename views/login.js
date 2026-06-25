const loginForm =
document.getElementById(
    'loginForm'
);

loginForm.addEventListener(
    'submit',

    async function(event){

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

        console.log(
            loginDetails
        );

        try{

            const response =
            await axios.post(

                'http://localhost:3000/user/login',

                loginDetails

            );

            console.log(
                response
            );

        }
        catch(err){

            console.log(err);

        }

    }
);