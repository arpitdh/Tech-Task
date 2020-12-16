const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");
const loginErrorMsg2 = document.getElementById("login-error-msg2");
const resetButton = document.getElementById("reset-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "abc" && password === "password") {
		loginErrorMsg.style.opacity = 0;
		loginErrorMsg2.style.opacity = 0;
		loginSuccessMsg.style.opacity = 1;
		alert("You have successfully logged in.");
    }
	else if ((username === "" && password === "") || (password === "") || (username === "")){
		loginErrorMsg2.style.opacity = 1;
	}
	else {
        loginErrorMsg.style.opacity = 1;
    }
})

resetButton.addEventListener("click", (r) => {
	r.preventDefault();
	location.reload();
})