class Home1 {
    constructor() {
      // Define locators as arrays to handle multiple selectors
      this.fullNameField = [
        
        '#MainContent_txtcn',
        'input[name="ctl00$MainContent$txtcn"]',
        'xpath///*[@id="MainContent_txtcn"]',
        'aria/Enter Your Full Name'
      ];
      this.emailField = [
        '#MainContent_txtem',
        'xpath///*[@id="MainContent_txtem"]',
        'aria/Enter Your Email'
      ];
      this.phoneField = [
        '#MainContent_pn',
        'xpath///*[@id="MainContent_pn"]',
        'aria/Phone Number'
      ];
      this.protectionField = [
        '#MainContent_txttr',
        'xpath///*[@id="MainContent_txttr"]',
        'aria/What are you looking to protect? (e.g. Name, Logo and Slogan)'
      ];
      this.submitButton = [
        '#MainContent_btnSubmit',
        'xpath///*[@id="MainContent_btnSubmit"]',
        'aria/Submit Now',
        'text/Submit Now'
      ];
      this.successMessage = [
        'h5',
        'xpath///*[@id="content"]/div/div/div[3]/h5',
        'aria/Dear test lead home,',
        'text/Dear test lead'
      ];
    }
  
    // Helper function to handle multiple selectors
    interactWithElement(selectors, action) {
      cy.get('body').then(($body) => {
        for (const selector of selectors) {
          if ($body.find(selector).length) {
            cy.get(selector).then(action);
            break; // Stop checking once an element is found
          }
        }
      });
    }
  
    // Visit environment-based URL
    visitPage() {
      const environment = Cypress.env('ENV') || 'test'; // Default to 'test'
      const url =
        environment === 'test'
          ? 'http://217.76.53.78:8040/'
          : 'https://www.trademarkregistrars.com/';
      cy.visit(url);
    }
  
    // Form actions
    fillFullName(value) {
      this.interactWithElement(this.fullNameField, ($el) => cy.wrap($el).type(value));
    }
  
    fillEmail(value) {
      this.interactWithElement(this.emailField, ($el) => cy.wrap($el).type(value));
    }
  
    fillPhone(value) {
      this.interactWithElement(this.phoneField, ($el) => cy.wrap($el).type(value));
    }
  
    fillProtectionDetails(value) {
      this.interactWithElement(this.protectionField, ($el) => cy.wrap($el).type(value));
    }
  
    clickSubmit() {
      this.interactWithElement(this.submitButton, ($el) => cy.wrap($el).click());
    }
  
    verifySuccessMessage(expectedText) {
      this.interactWithElement(this.successMessage, ($el) => {
        cy.wrap($el).should('contain.text', expectedText);
      });
    }
  }
  
  export default Home1;
  