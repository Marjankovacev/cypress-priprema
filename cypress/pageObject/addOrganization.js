

class AddOrganization {
  
    get addButton() {
      return cy.get(".vs-c-my-organization__avatar").eq(1);
    };
    get enterName() {
        return cy.get('input[name="name"]')
    };

    get submitButton() {
            return cy.get("button[name='next_btn']");
        };
    get createButton(){
            return cy.get("button[name='next_btn');
        }

    addOrg(name ) {
        this.enterName.type(name);
        this.submitButton.click();
       };  
        
  
  
  }
  
  export const addOrganization = new AddOrganization();