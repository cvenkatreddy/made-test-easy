class LoginPage {
  getUserName() {
    return cy.get("#username");
  }
  getContinueButton() {
    return cy.get("#submitRow");
  }
  getPassword() {
    return cy.get("#password");
  }
  getSignInButton() {
    return cy.get("#loginButton");
  }
  getErrorMessage() {
    return cy.get("div#container h1");
  }
  getForgotPasswordButton() {
    return cy.get("input[name=sendForgotPassword]");
  }
}

export default LoginPage;
