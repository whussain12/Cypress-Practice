export class TrademarkPage {
    constructor() {
      this.fullNameField = '#MainContent_txtcn';
      this.emailField = '#MainContent_txtem';
      this.phoneField = '#MainContent_pn';
      this.protectionField = '#MainContent_txttr';
      this.submitButton = '#MainContent_btnSubmit';
      this.successMessage = 'h5';
      this.environment = Cypress.env('ENV') || 'test'; 
      this.url = this.getUrlBasedOnEnvironment();
      }
  
      getUrlBasedOnEnvironment() {
        if (this.environment === 'test') {
          return Cypress.env('test_url_trademark_registrars');
        } else if (this.environment === 'prod') {
          return Cypress.env('prod_url_trademark_registrars');
        } else {
          throw new Error(`Unknown environment: ${this.environment}`);
        }
      }
    
      // Visit the URL
      visit() {
        cy.visit(this.url);
      }
  
    fillForm(fullName, email, phone, protectionDetails) {
      cy.get(this.fullNameField).type(fullName);
      cy.get(this.emailField).type(email);
      cy.get(this.phoneField).type(phone);
      cy.get(this.protectionField).type(protectionDetails);
    }
  
    submitForm() {
      cy.get(this.submitButton).click();
    }
  
    verifySuccessMessage(expectedMessage) {
      cy.get(this.successMessage).should('contain.text', expectedMessage);
    }
  }
  
  export default TrademarkPage;

  