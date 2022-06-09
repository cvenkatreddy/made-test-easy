// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import "cypress-iframe";
import LoginPage from "./pageobjects/LoginPage";
import HomePage from "./pageobjects/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add("login", (userEmail, userPassword) => {
  loginPage.getUserName().type(userEmail).should("have.value", userEmail);
  loginPage.getContinueButton().click();
  loginPage.getPassword().type(userPassword);
  loginPage.getSignInButton().click();
});

Cypress.Commands.add("logout", () => {
  cy.get(homePage.getUserAccount(), { timeout: 10000 })
    .click()
    .get(homePage.getAccountDropdownLogout(), { timeout: 10000 })
    .click()
    .get(homePage.getLogoutConfirmDialogSubmit(), { timeout: 10000 })
    .click();
});

Cypress.Commands.add("createNote", () => {
  homePage.getNoteButton().click();
  cy.enter(homePage.getNotesIframe()).then((getBody) => {
    getBody()
      .find(homePage.getNotesTitle())
      .should("be.visible")
      .click()
      .type("This is a note title")
      .wait(1000);
    getBody()
      .find(homePage.getNotesTitle())
      .should("be.visible")
      .should("have.text", "This is a note title");
    getBody()
      .find(homePage.getNotesContent())
      .should("be.visible")
      .click()
      .type("This is a note")
      .wait(1000);
    getBody()
      .find(homePage.getNotesContent())
      .should("be.visible")
      .should("have.text", "This is a note");
  });
});
