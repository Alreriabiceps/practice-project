    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "russelle" && password === "qwerty") {
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    });
