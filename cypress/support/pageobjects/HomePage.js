class HomePage {
  isHomeMenuExists() {
    return cy.get("#qa-NAV_HOME", { timeout: 60000 }).should("be.visible");
  }
  getNoteButton() {
    return cy.get(
      "div[id*='qa-HOME_WIDGET_CONTROL_Notes'] > button[aria-label='New Note']",
      { timeout: 50000 }
    );
  }
  getCurrentUrl() {
    return cy.location("href", { timeout: 10000 });
  }
  getHeader() {
    return cy.get("h1").invoke("text");
  }
  getNotesIframe() {
    return "#qa-COMMON_EDITOR_IFRAME";
  }
  getNotesTitle() {
    return "div[data-testid='note-header']";
  }
  getNotesContent() {
    return "#en-note";
  }
  getLatestCreatedNotesTimeStamp() {
    return cy
      .get("div[id*='qa-NOTES_SIDEBAR_NOTE_UPDATED']:first", { timeout: 20000 })
      .invoke("text");
  }
  getNotesMenu() {
    return cy.get("#qa-NAV_ALL_NOTES", { timeout: 10000 });
  }
  getUserAccount() {
    return ".aUsP60cgYkgHDZX4xEIM";
  }
  getAccountDropdownLogout() {
    return "#qa-ACCOUNT_DROPDOWN_LOGOUT > ._o_an1JnxrvWXz5ZfG7M > ._G3X_pG_gFNDFT6lM5d4 > ._MD_fSTtapAb30uIA9oC";
  }
  getLogoutConfirmDialogSubmit() {
    return "#qa-LOGOUT_CONFIRM_DIALOG_SUBMIT";
  }
}

export default HomePage;
