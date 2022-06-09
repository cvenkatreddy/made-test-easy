/// <reference types="Cypress" />
import BasePage from "../../support/pageobjects/BasePage";
import LoginPage from "../../support/pageobjects/LoginPage";
import HomePage from "../../support/pageobjects/HomePage";

describe("Login Test Suite", function () {
  const basePage = new BasePage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.fixture("userdata").then(function (userData) {
      this.userData = userData;
    });
    cy.visit("/");
    basePage.getLogin().click();
  });

  it("Login with invalid credentials", function () {
    cy.login(this.userData.invalidEmail, this.userData.invalidPassword);
    homePage.getCurrentUrl().should("contain", "Login.action");
    loginPage.getErrorMessage().contains("Password Reset Required");
    loginPage.getForgotPasswordButton().should("be.visible");
  });

  it("Login with valid credentials", function () {
    basePage.getCurrentUrl().should("contain", this.userData.loginUrl);
    cy.login(this.userData.validEmail, this.userData.validPassword);
    homePage.isHomeMenuExists();
  });

  after(function () {
    cy.logout();
    homePage.getCurrentUrl().should("contain", this.userData.logOutUrl);
    homePage.getHeader().should("equal", this.userData.logOutMessage);
  });
});
