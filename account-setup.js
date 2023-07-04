const form = document.getElementById("account-setup-form");
const firstName = document.getElementById("firstname");
console.dir(firstName);
const lastName = document.getElementById("lastname");
const username = document.getElementById("username");
const avatarURL = document.getElementById("avatarurl");
const fields = [firstName, lastName, username];

const errorMessage = document.getElementsByClassName("error");
const firstNameError = document.getElementById("firstname-error");
const lastNameError = document.getElementById("lastname-error");
const usernameError = document.getElementById("username-error");
const avatarURLError = document.getElementById("avatarurl-error");

form.addEventListener("submit", toggleSubmit);
firstName.addEventListener("blur", checkText);
lastName.addEventListener("blur", checkText);
username.addEventListener("blur", checkUsername);
avatarURL.addEventListener("blur", checkText);
form.addEventListener("submit", toggleSubmit);

function toggleSubmit(event) {
	if (!fields.every((field) => [...field.classList].includes("valid")))
		event.preventDefault();
}

function checkText(event) {
	const inputs = event.target;
	if (/^[a-zA-Z]+$/.test(inputs.value)) {
		inputs.classList.add("valid");
		inputs.classList.remove("invalid");
		[...errorMessage].map((message) => {
			message.innerText = "";
		});
	} else {
		inputs.classList.add("invalid");
		inputs.classList.remove("valid");
		if (inputs.id === "firstname")
			firstNameError.innerText = "Please enter your first name";
		if (inputs.id === "lastname")
			lastNameError.innerText = "Please enter your last name";
	}
}

function checkUsername(event) {
	const inputs = event.target;
	if (/^[a-zA-Z]+$/.test(inputs.value)) {
		inputs.classList.add("valid");
		inputs.classList.remove("invalid");
		[...errorMessage].map((message) => {
			message.innerText = "";
		});
	} else {
		inputs.classList.add("invalid");
		inputs.classList.remove("valid");
		usernameError.innerText = "Please enter a valid username";
	}
}
