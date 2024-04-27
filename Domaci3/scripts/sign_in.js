let signInButton = document.getElementById("sign-in-button");

signInButton.addEventListener("click", handleSignIn);

async function handleSignIn() {
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let payloadData = {
        username: username,
        password: password,
    };
    console.log(payloadData);

    try {
        let results = await fetch("https://dev-lab.dev/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payloadData),
        });

        let data = await results.json();

        if (data.success) {
            localStorage.setItem("accessTtoken", data.token);
            localStorage.setItem("refreshToken", username);
        }
    } catch (err) {
        console.log(err);
    }
}
