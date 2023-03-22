/// <reference types="Cypress" />
import { addOrganization } from "../pageObject/addOrganization";
import { loginPage } from "../pageObject/loginPage";

describe("add organization", () => {
    beforeEach("visit and log in ", () => {
        cy.visit("/");
        cy.url().should("include", "/login");
      
        loginPage.login("Miroslav023@gmail.com ", "Miroslav023");
        loginPage.submitButton.click();

      });

       it("login with valid credentials", () => {
           addOrganization.addButton.click();
         addOrganization.enterName.type("Neka org");
         addOrganization.submitButton.click();
         addOrganization.createButton.click();
         cy.url().should("contain", "/login");
  });
});