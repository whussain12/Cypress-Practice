describe('Contact Us Form Test', () => {
    it('Visits the correct environment', () => {
        const environment = Cypress.env('ENV'); // Set ENV via --env flag
        let url;

        if (environment === 'test') {
            url = Cypress.env('test_url');
        } else if (environment === 'prod') {
            url = Cypress.env('prod_url');
        }

        if (url) {
            cy.visit(url);
            cy.log(`Visiting: ${url}`);
        } else {
            throw new Error('Environment not set correctly or URL not defined for the current environment');
        }
    });
});
    it('should fill out and submit the form conditionally', () => {
   // cy.visit("https://trademarkbridge.com/contact-us")
    cy.get('body').then(($body) => {
        // For 'Name' field
        if ($body.find('#MainContent_txtcn1').length) {
            cy.get('#MainContent_txtcn1').type('Test Lead Home');
        } else if ($body.find('[name="ctl00$MainContent$txtcn1"]').length) {
            cy.get('[name="ctl00$MainContent$txtcn1"]').type('Test Lead Home');
        }

        // For 'Email' field
        if ($body.find('#MainContent_txtem1').length) {
            cy.get('#MainContent_txtem1').type('jester35@example.com');
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

