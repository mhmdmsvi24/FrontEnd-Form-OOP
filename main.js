import "./src/styles/theme.css";
import "./src/styles/form.css";
import "./style.css";

import { Signin, Login } from "./src/Model/Form";
import { debounce } from "./src/scripts/utils";

("use strict");

// Forms
const signinForm = document.getElementById("signin__form");
const loginForm = document.getElementById("login__form");
const formSwitcher = document.getElementById("form-switcher");

// Form Switch Texts
const formSwitchTexts = {
  signin__form: "Already have an account? Login",
  login__form: "Create an account if you don't have one",
};

// Submit Buttons
const signinButton = signinForm.querySelector('button[type="submit"]');
const loginButton = loginForm.querySelector('button[type="submit"]');

// Form Manager Class
class FormManager {
  constructor() {
    this.activeForm = "signin__form";
  }

  switchActiveFormClass() {
    if (this.activeForm === "signin__form") {
      this.activeForm = "login__form";
    } else {
      this.activeForm = "signin__form";
    }
  }

  activeFormClass() {
    if (this.activeForm === "signin__form") {
      return new Signin();
    }

    return new Login();
  }
}

const formManager = new FormManager();
const clientForm = formManager.activeFormClass();

// formSwitcher is the text under the form, clicking on it results in changing for and it's text
formSwitcher.addEventListener("click", (e) => {
  e.preventDefault();
  formManager.switchActiveFormClass();

  initFormEvents(
    Object.values(formInputs[formManager.activeForm]),
    Object.values(errorElements[formManager.activeForm])
  );
  if (formManager.activeForm === "signin__form") {
    signinForm.classList.remove("d-none");
    loginForm.classList.add("d-none");

    formSwitcher.textContent = formSwitchTexts["signin__form"];
  } else {
    signinForm.classList.add("d-none");
    loginForm.classList.remove("d-none");

    formSwitcher.textContent = formSwitchTexts["login__form"];
  }
});

// Form Inputs
const formInputs = {
  signin__form: {
    user: [
      document.getElementById("reg-user"),
      clientForm.usernameFormatValidation,
    ],
    pass: [
      document.getElementById("reg-pass"),
      clientForm.passwordFormatValidation,
    ],
    repass: [
      document.getElementById("reg-repass"),
      clientForm.rePassDoubleCheckValidation,
    ],
    phone: [
      document.getElementById("reg-phone"),
      clientForm.phoneNumberFormatValidation,
    ],
    email: [
      document.getElementById("reg-mail"),
      clientForm.emailFormatValidation,
    ],
    dob: [document.getElementById("reg-dob"), clientForm.DOBFormatValidation],
    submit: [signinButton, clientForm.submit],
  },
  login__form: {
    user: [
      document.getElementById("username"),
      clientForm.usernameFormatValidation,
    ],
    pass: [
      document.getElementById("password"),
      clientForm.passwordFormatValidation,
    ],
    submit: [loginButton, clientForm.submit],
  },
};

// Error Elements
const errorElements = {
  signin__form: {
    user: document.querySelector(".signin__error--username"),
    pass: document.querySelector(".signin__error--password"),
    repass: document.querySelector(".signin__error--repass"),
    phone: document.querySelector(".signin__error--phone"),
    email: document.querySelector(".signin__error--email"),
    dob: document.querySelector(".signin__error--dob"),
  },
  login__form: {
    user: document.querySelector(".login__error--user"),
    pass: document.querySelector(".login__error--pass"),
  },
};

// Takes element, respected validation method and the errorBox to show the error
function handleUI(e, method, errorProp) {
  const validationStatus = method(e.target.value);
  clientForm.formErrorUIHandler(errorProp, validationStatus);
}

// when user input sth the debounce fn will redirect it after 1.5s to debounce it
function handleInputEvents(input, method, errorBox) {
  input.addEventListener("keyup", (e) => {
    const debounceInput = debounce(handleUI, 1500);
    //? You may ask wtf is that function bind method called, thats because writing sth like ...
    //? clientForm.method is not valid
    debounceInput(e, method.bind(clientForm), errorBox);
  });
}

function initFormEvents(formInputs, formErrorBox) {
  formInputs.map((input, i) => {
    handleInputEvents(input[0], input[1], formErrorBox[i]);
  });
}

initFormEvents(
  Object.values(formInputs[formManager.activeForm]),
  Object.values(errorElements[formManager.activeForm])
);
