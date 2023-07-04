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
username.addEventListener("keyup", checkUsername);
avatarURL.addEventListener("blur", checkURL);
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
	if (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(inputs.value)) {
		inputs.classList.add("valid");
		inputs.classList.remove("invalid");
		[...errorMessage].map((message) => {
			message.innerText = "";
		});
	} else {
		inputs.classList.add("invalid");
		inputs.classList.remove("valid");
		if (!/\d+/.test(inputs.value))
			usernameError.innerText = "Username must contain at least 1 number";
		if (!/[a-zA-Z]+/.test(inputs.value))
			usernameError.innerText = "Username must contain at least 1 letter";
	}
}

function checkURL(event) {
	const inputs = event.target;
	if (
		inputs.value.length === 0 ||
		/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
			inputs.value
		)
	) {
		inputs.classList.add("valid");
		inputs.classList.remove("invalid");
		[...errorMessage].map((message) => {
			message.innerText = "";
		});
	} else {
		inputs.classList.add("invalid");
		inputs.classList.remove("valid");
		avatarURLError.innerText = "Please enter a valid URL";
	}
}
