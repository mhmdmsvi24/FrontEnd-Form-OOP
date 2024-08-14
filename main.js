import "./src/styles/theme.css";
import "./src/styles/form.css";
import "./style.css";

import { Signin, Login } from "./src/Model/Form";

("use strict");

// Forms
const signinForm = document.getElementById("signin__form");
const loginForm = document.getElementById("login__form");

// * Signin Form Inputs
const regUser = document.getElementById("reg-user");
const regPass = document.getElementById("reg-pass");
const regRepass = document.getElementById("reg-repass");
const regPhone = document.getElementById("reg-phone");
const regMail = document.getElementById("reg-mail");
const regBirth = document.getElementById("dob");

// ! Signin Form Error Spans
const userError = document.querySelector(".signin__error--username");
const passError = document.querySelector(".signin__error--password");
const repassError = document.querySelector(".signin__error--repass");
const phoneError = document.querySelector(".signin__error--phone");
const emailError = document.querySelector(".signin__error--email");
const dobError = document.querySelector(".signin__error--dob");

// * Login Form Inputs
const loginUser = document.getElementById("username");
const loginPass = document.getElementById("password");

// ! Login Form Error Spans
const loginUserError = document.querySelector(".login__error--user");
const loginPassError = document.querySelector(".login__error--pass");

// Submit Buttons
const signinButton = signinForm.querySelector('button[type="submit"]');
const loginButton = loginForm.querySelector('button[type="submit"]');

// signin Logic
