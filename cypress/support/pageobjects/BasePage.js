class BasePage {
  getLogin() {
    return cy.get("p.login-cta > a[href*='/Login.action']");
  }
  getCurrentUrl() {
    return cy.location("href");
  }
}

export default BasePage;
