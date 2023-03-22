/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";

describe("login tests", () => {
  beforeEach("visit and log in ", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });
  it("login with valid credentials", () => {
    loginPage.login("Miroslav023@gmail.com ", "Miroslav023");
    loginPage.submitButton.click();
    cy.url().should("contain", "/login");
  });
});
