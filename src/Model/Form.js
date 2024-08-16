import checkIcon from "../assets/icons/task_alt_24dp_00FF1E_FILL0_wght400_GRAD0_opsz24.svg";

class Form {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.hasError = false;
  }

  usernameFormatValidation = (username) => {
    const specialCharRegex = /[^a-zA-Z0-9]/g;
    try {
      if (username.length > 12) throw new Error("Max Username length < 12");
      else if (username.length < 4) throw new Error("Min Username length > 4");
      else if (!isNaN(parseInt(username[0])))
        throw new Error("Username Can't start with numbers");
      else if (specialCharRegex.test(username)) {
        throw new Error("Invalid Username characters");
      }
      this.username = username;
      return "OK";
    } catch (error) {
      return error;
    }
  };

  passwordFormatValidation = (password) => {
    const invalidSpecialCharRegex = /[^\w!@#$%^&*()+]/g;

    try {
      if (password.length < 8) throw new Error("Min Password Length is 8");
      else if (invalidSpecialCharRegex.test(password))
        throw new Error("Invalid Password Format");

      this.password = password;
      return "OK";
    } catch (error) {
      return error;
    }
  };

  formErrorUIHandler = (element, error) => {
    if (error instanceof Error) {
      this.hasError = true;
      element.textContent = error.message;
      element.classList.add("color-error", "fs-small");
    } else {
      this.hasError = false;
      const img = document.createElement("img");
      img.src = checkIcon;
      img.alt = "Success";
      element.innerHTML = "";
      element.appendChild(img);
    }
  };
}

export class Signin extends Form {
  constructor(username, password, rePass, phoneNumber, email, dateOfBirth) {
    super(username, password);

    this.repeatPassword = rePass;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.birthDate = dateOfBirth;
  }

  rePassDoubleCheckValidation(repass) {
    try {
      const prevPass = this.password;
      if (prevPass !== repass) throw new Error("Password Don't match");
      this.repeatPassword = repass;
      return "OK";
    } catch (Error) {
      return Error;
    }
  }

  phoneNumberFormatValidation(phoneNumber) {
    try {
      const validPhoneNumberRegex = /\+989[0-9]{9}/;
      if (!validPhoneNumberRegex.test(phoneNumber))
        throw new Error("Invalid Phone Number");

      this.phoneNumber = phoneNumber;
      return "OK";
    } catch (Error) {
      return Error;
    }
  }

  emailFormatValidation(email) {
    try {
      const validEmailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!validEmailRegex.test(email))
        throw new Error("Invalid Email Address");

      this.email = email;
      return "OK";
    } catch (Error) {
      return Error;
    }
  }

  DOBFormatValidation(dob) {
    this.birthDate = dob;
    return "OK";
  }

  // An API to get the form data
  get formData() {
    return {
      username: this.username,
      password: this.password,
      repass: this.repeatPassword,
      phoneNumber: this.phoneNumber,
      email: this.email,
      dob: this.birthDate,
    };
  }

  //* Submit?
  submit() {
    // submit form
  }
}

export class Login extends Form {
  constructor(username, password) {
    super(username, password);
  }

  // data base validation
  DBUserValidation() {
    // fetch some data
  }

  submit() {
    // submit form
  }
}
