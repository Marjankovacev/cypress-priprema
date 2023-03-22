class LoginPage {
  
    get emailInput() {
      return cy.get(".el-input__inner").eq(0);
    }
  
    get passwordInput() {
      return cy.get(".el-input__inner").eq(1);
    }
  
    get submitButton() {
      return cy.get("button").eq(0);
    }
    

  
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.submitButton.click();
    }
  }
  
  export const loginPage = new LoginPage();