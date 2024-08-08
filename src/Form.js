export class Form {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Signin extends From {
  constructor(username, password) {
    super(username, password);
  }
}
