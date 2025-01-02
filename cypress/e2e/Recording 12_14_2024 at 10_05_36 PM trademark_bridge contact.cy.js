describe("Recording 12/14/2024 at 10:05:36 PM trademark_bridge contact", () => {
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
            url = Cypress.env('test_url_trademark_bridge');
        } else if (environment === 'prod') {
            url = Cypress.env('prod_url_trademark_bridge');
        }
        cy.visit(url); // Visit the environment URL before each test
    });

   it("tests Recording 12/14/2024 at 10:05:36 PM trademark_bridge contact", () => {
     //cy.viewport(1358, 641);
     cy.visit(`${url}/contact-us`);
     //cy.get("#navbarNavDropdown > ul > li:nth-of-type(4) > a").click();
    // cy.location("href").should("eq",`${url}/contact-us`);
     cy.get("#MainContent_txtcn1").click().type("test lead contact recorder automation cypress ci cd");
     cy.get("#MainContent_txtem1").click();
     cy.get("#MainContent_txtem1").type("tester37@yopmail.com");
     cy.get("#MainContent_pn1").click();
     cy.get("#MainContent_pn1").type("8887960500");
     cy.get("#MainContent_txttr1").click();
     cy.get("#MainContent_txttr1").type("leads testing on automation recording");
     cy.get("#MainContent_btnSubmit1").click();
     cy.url().then((url) => {
      if (url.includes('/thank')) {
          // If redirected to /thank, verify the success message
          cy.get('.common-title').should('have.text', 'Thank You!');
      } else if (url.includes('/forms')) {
     cy.location("href").should("eq",`${url}/forms`); //added a commentgit 
    } else {
      // Throw an error if the redirection is unexpected
      throw new Error(`Unexpected redirection: ${url}`);
  }
   });
})
});