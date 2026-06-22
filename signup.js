const form = document.getElementById("signupForm");

form.addEventListener("submit", async(event)=>{
    event.preventDefault();

    const user = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    password : document.getElementById("password").value

    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
        );

        const data = await response.json();

        console.log("Response:",data);
        alert("Signup Successful");

    } catch (error) {
        console.log("Error:",error);
    }
});