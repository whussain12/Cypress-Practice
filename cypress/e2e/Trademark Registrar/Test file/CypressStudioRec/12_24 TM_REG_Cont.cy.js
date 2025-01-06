describe('My Test Suite', () => {
  let environment;
  let url;
  before(() => {
      // Set the environment dynamically based on a command line argument or default
      environment = Cypress.env('ENV') || 'test'; // Default to 'test' if not set
  });

  beforeEach(() => {
      // Set the URL based on environment
      url;
      if (environment === 'test') {
          url = Cypress.env('test_url_trademark_registrars');
      } else if (environment === 'prod') {
          url = Cypress.env('prod_url_trademark_registrars');
      }
      cy.visit(url); // Visit the environment URL before each test
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent test failure
    });
  });

  it("tests 12/24 TM_REG_Cont", () => {
    //cy.viewport(1349, 159);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent test failure
  });
    cy.pause();
    //cy.visit("https://www.trademarkregistrars.com/");
    cy.get("#navbar > ul > li:nth-of-type(4) > a").click();
    //cy.location("href").should("eq", "`${url}/contact-us/default`");
    cy.get("#MainContent_txtcn").click();
    cy.get("#MainContent_txtcn").type("test lead home");
    cy.get("#MainContent_txtem").type("jester35@yopmail.com");
    cy.get("#MainContent_pn").click();
    cy.get("#MainContent_pn").type("2143556757");
    cy.get("#MainContent_txttr").click();
    cy.get("#MainContent_txttr").type("just for testing");
    cy.get("div.body-content fieldset > div").click();
    cy.get("textarea").click();
    cy.get("textarea").type("just testing");
    cy.get("#MainContent_btnSubmit").click();
    if (url.includes('/thank')) {
      // If redirected to /thank, verify the success message
      cy.location("href").should("eq", "`${url}/thank`");
  } else if (url.includes('/forms')) {
   cy.location("href").should("eq", "`${url}/forms`");}
    //cy.get("h2").click();
  
  });
});
