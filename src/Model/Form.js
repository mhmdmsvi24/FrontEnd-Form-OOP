class Form {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get usernameFormatValidation() {
    const specialCharRegex = /[^a-zA-Z0-9]/g;

    try {
      if (this.username.lenght > 12)
        throw new Error("Max Username length < 12");
      else if (specialCharRegex.test(this.username))
        throw new Error("Invalid Username characters");

      throw new Error("Looks Cool!");
    } catch (Error) {
      return Error.message;
    }
  }

  get passwordFormatValidation() {
    const invalidSpecialCharRegex = /[^\w!@#$%^&*()+]/g;

    try {
      if (this.password.lenght < 8) throw new Error("Min Password Length is 8");
      else if (invalidSpecialCharRegex.test(this.password))
        throw new Error("Invalid Password Format");
      throw new Error("Looks Good");
    } catch (Error) {
      return Error.message;
    }
  }
}

export class Signin extends Form {
  constructor(username, password, phoneNumber, email, dateOfBirth) {
    super(username, password);

    this.phoneNumber = phoneNumber;
    this.email = email;
    this.birthDate = dateOfBirth;
  }

  get phoneNumberFormatValidation() {
    try {
      const validPhoneNumberRegex = /\+989[0-9]{9}/;
      if (!validPhoneNumberRegex.test(this.phoneNumber))
        throw new Error("Invalid Phone Number");
      throw new Error("Looks Good");
    } catch (Error) {
      return Error.message;
    }
  }

  get emailFormatValidation() {
    try {
      const validEmailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!validEmailRegex.test(this.email))
        throw new Error("Invalid Email Address");
      throw new Error("Looks Good");
    } catch (Error) {
      return Error.message;
    }
  }

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
