describe('My Test Suite', () => {
    let environment;
    let url;

    before(() => {
        // Set the environment dynamically based on a command line argument or default
        environment = Cypress.env('ENV') || 'test'; // Default to 'test' if not set
    });

    beforeEach(() => {
        // Set the URL based on environment
        let url;
        if (environment === 'test') {
            url = Cypress.env('test_url_trademark_bridge');
        } else if (environment === 'prod') {
            url = Cypress.env('prod_url_trademark_bridge');
        }
        cy.visit(url); // Visit the environment URL before each test
    });

    it('Test Case 1', () => {
        // Your test code here
        cy.xpath("//nav[@id='dynamic']/div/a/img").click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Trademark Services').click();
    });

    it('Test Case 2', () => {
        // Your test code here
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Company Formation').click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Legal Services').click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Additional Corporate Services').click()


        // Visit the website
        // cy.visit('https://www.trademarkbridge.com/');

        // Perform clicks and navigation
        cy.xpath("//nav[@id='dynamic']/div/a/img").click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Trademark Services').click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Company Formation').click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Legal Services').click();
        cy.get('#navbarDropdownMenuLink').click();
        cy.contains('Additional Corporate Services').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Trademark Services').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Register Your Trademark').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('TTAB Petition').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Comprehensive Trademark Search').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Trademark Ownership Transfers').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Active Monitoring for Trademark Infringement').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Managed Trademark Renewal').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Submission of Statements of Use').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Support and Response for Trademark Office Actions').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Support and Guidance for Trademark Cancellations').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Representation for Trademark Disputes').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Combatting Counterfeiting and Trademark Infringement').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Register Your Copyright').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Assistance for Your Copyright Enforcement').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Search for Existing Patent').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Support and Response for Patent Office Actions').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Application Submission for Patent').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Representation for Patent Protection').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Company Formation').trigger('mouseover');
        cy.contains('LLC').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Company Formation').trigger('mouseover');
        cy.contains('C Corporation').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Company Formation').trigger('mouseover');
        cy.contains('S Corporation').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Company Formation').trigger('mouseover');
        cy.contains('Non-Profit').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.contains('Legal Consultation On Partnerships & LLPs').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.contains('Due Diligence Process').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.contains('Business Immigration Law').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.contains('IT & Commercial Law').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Legal Services').trigger('mouseover');
        cy.contains('Data Protection & Privacy Law').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Amazon Brand Registry In US').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Business Formation Services').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Company Dissolution').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Issues Of Shares').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Transfer Of Shares').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Certificate Of Good Standing').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Company Name Change').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Company Renewals').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Nominee Director & Secretarial Services').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Bookkeeping').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('Tax Advisory & Filing').click();
        cy.get('#navbarDropdownMenuLink').trigger('mouseover');
        cy.contains('Additional Corporate Services').trigger('mouseover');
        cy.contains('CFO Services').click();
        cy.contains('About Us').click();
        cy.contains('FAQs').click();
        cy.contains('Contact Us').click();

        // Fill form
        cy.get('#MainContent_txtcn1').type('test lead');
        cy.get('#MainContent_txtem1').type('tester35@yopmail.com');
        cy.get('#MainContent_pn1').type('8887960500');
        cy.get('#MainContent_txttr1').type('test now');
        cy.get('#MainContent_btnSubmit1').click();

        // Assertion for thank you message
       // cy.xpath("//form[@id='ctl01']/section/div/div/div/h2").should('contain.text', 'Thank You!');

        // Navigation back to the home page
        // cy.visit('https://www.trademarkbridge.com/thank');
        //cy.visit(`${url}`);
        // cy.visit('https://www.trademarkbridge.com/');
        cy.go('back');

        // Clicks in footer links
        cy.xpath("//form[@id='ctl01']/footer/div/div[2]/div/ul/li/a").click();
        cy.xpath("//form[@id='ctl01']/footer/div/div[2]/div/ul/li[2]/a").click();
        cy.xpath("//form[@id='ctl01']/footer/div/div[2]/div/ul/li[3]/a").click();
        cy.xpath("//form[@id='ctl01']/footer/div/div[2]/div/ul/li[4]/a").click();
    });
});
