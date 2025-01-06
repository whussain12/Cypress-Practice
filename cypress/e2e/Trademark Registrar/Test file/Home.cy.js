/*import TrademarkPage  from "../Pages/Home";
describe('Trademark Registration Tests', () => {
  
  const trademarkPage = new TrademarkPage();

  it('should successfully submit the trademark form', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent test failure
  });
    // Visit the page
    trademarkPage.visit();

    // Fill out the form
    trademarkPage.fillForm('John Doe', 'john.doe@example.com', '1234567890', 'Testing trademark registration');

    // Submit the form
    trademarkPage.submitForm();

     //Verify the success message
   // trademarkPage.verifySuccessMessage('Dear John Doe,');
  });
});*/
import TrademarkPage from "../Pages/Home";

describe('Trademark Registration Tests', () => {
  const trademarkPage = new TrademarkPage();

  it('should successfully submit the trademark form', () => {
    // Prevent uncaught exceptions from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // Visit the page
    trademarkPage.visit();

    // Pause to inspect page state
    cy.pause();

    // Ensure all form elements are visible
    cy.get(trademarkPage.fullNameField).should('exist').and('be.visible');
    cy.get(trademarkPage.emailField).should('exist').and('be.visible');
    cy.get(trademarkPage.phoneField).should('exist').and('be.visible');
    cy.get(trademarkPage.protectionField).should('exist').and('be.visible');

    // Fill out the form
    trademarkPage.fillForm('John Doe', 'john.doe@example.com', '1234567890', 'Testing trademark registration');

    // Ensure the submit button is visible and enabled
    cy.get(trademarkPage.submitButton).should('be.visible').and('not.be.disabled');

    // Submit the form
    trademarkPage.submitForm();

    // Verify the success message
    //trademarkPage.verifySuccessMessage('Dear John Doe,');
  });
});

