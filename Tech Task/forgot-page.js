const forgotForm = document.getElementById("forgot-form");
const submitButton = document.getElementById("forgot-form-submit");
const forgotErrorMsg = document.getElementById("forgot-error-msg");
const forgotSuccessMsg = document.getElementById("forgot-success-msg");
const resetButton = document.getElementById("reset-form-submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fname = forgotForm.Fname.value;
    const lname = forgotForm.Lname.value;
	const email = forgotForm.EmailId.value;
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     
	if ((email.search(emailRegEx) == -1) && email !== "") {
		  forgotErrorMsg.style.opacity = 0;
		  forgotSuccessMsg.style.opacity=0;
          alert("Please enter a valid email address.");
		  forgotErrorMsg.style.opacity = 1;
     }
	 
    else if ((fname === "") || (lname === "") || (email === "")){
		forgotErrorMsg.style.opacity = 0;
		forgotSuccessMsg.style.opacity=0;
		forgotErrorMsg.style.opacity = 1;
	}
	else {
        forgotErrorMsg.style.opacity = 0;
		forgotSuccessMsg.style.opacity = 1;
		alert("User ID and Password sent on your mail.");
    }
})

resetButton.addEventListener("click", (r) => {
	r.preventDefault();
	location.reload();
})