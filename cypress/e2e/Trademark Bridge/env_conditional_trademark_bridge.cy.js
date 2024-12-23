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
        url = Cypress.env('test_url_trademark_bridge');
      } else if (environment === 'prod') {
        url = Cypress.env('prod_url_trademark_bridge');
      }
      cy.visit(url); // Visit the environment URL before each test
    });
    it('Test Case 1', () => {
        cy.visit(`${url}/contact-us`);
        // Fill out and submit the form
        cy.get('body').then(($body) => {
            // For 'Name' field
            if ($body.find('#MainContent_txtcn1').length) {
                cy.get('#MainContent_txtcn1').type('Test Lead Home');
            } else if ($body.find('[name="ctl00$MainContent$txtcn1"]').length) {
                cy.get('[name="ctl00$MainContent$txtcn1"]').type('Test Lead Home');
            }

            // For 'Email' field
            if ($body.find('#MainContent_txtem1').length) {
                cy.get('#MainContent_txtem1').type('jester35@yopmail.com');
            } else if ($body.find('[name="ctl00$MainContent$txtem1"]').length) {
                cy.get('[name="ctl00$MainContent$txtem1"]').type('jester35@yopmail.com');
            }

            // For 'Contact Number' field
            if ($body.find('#MainContent_pn1').length) {
                cy.get('#MainContent_pn1').type('8887960500');
            } else if ($body.find('[name="ctl00$MainContent$pn1"]').length) {
                cy.get('[name="ctl00$MainContent$pn1"]').type('8887960500');
            }

            // For 'Area Text' field
            if ($body.find('#MainContent_txttr1').length) {
                cy.get('#MainContent_txttr1').type('Test Area Text prod');
            } else if ($body.find('[name="ctl00$MainContent$txttr1"]').length) {
                cy.get('[name="ctl00$MainContent$txttr1"]').type('Test Area Text');
            }

            // For 'Submit Button'
            if ($body.find('#MainContent_btnSubmit1').length) {
                cy.get('#MainContent_btnSubmit1').click();
            } else if ($body.find('[name="ctl00$MainContent$btnSubmit1"]').length) {
                cy.get('[name="ctl00$MainContent$btnSubmit1"]').click();
            }
        });
    });

});
