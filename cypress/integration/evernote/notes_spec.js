/// <reference types="Cypress" />

import BasePage from "../../support/pageobjects/BasePage";
import HomePage from "../../support/pageobjects/HomePage";

before(function () {
  cy.fixture("userdata").then(function (userData) {
    this.userData = userData;
  });
});

describe("Notes Test Suite", function () {
  const basePage = new BasePage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.visit("/");
    basePage.getLogin().click();
    basePage.getCurrentUrl().should("contain", this.userData.loginUrl);
    cy.login(this.userData.validEmail, this.userData.validPassword);
    homePage.isHomeMenuExists();
  });

  it("Create a note", function () {
    cy.createNote();
  });

  it("Verify the created note", function () {
    homePage.getNotesMenu().click();
    homePage
      .getLatestCreatedNotesTimeStamp()
      .should("contain", this.userData.noteTimeStamp);
  });

  afterEach(function () {
    cy.logout();
    homePage.getCurrentUrl().should("contain", this.userData.logOutUrl);
    homePage.getHeader().should("equal", this.userData.logOutMessage);
  });
});

after(function () {
  this.userData = null;
});
