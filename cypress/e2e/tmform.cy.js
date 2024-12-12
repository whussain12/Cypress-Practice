/*describe('Trademark Bridge Contact Form', () => {
    before(() => {
        cy.viewport(1358, 641);
        cy.visit('https://www.trademarkbridge.com/');
    });

    it('Fills out and submits the contact form', () => {
        // Click on 'Contact Us'
        cy.get('main').within(() => {
            cy.get('aria/Contact Us')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#navbarNavDropdown > ul > li:nth-of-type(4) > a')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="navbarNavDropdown"]/ul/li[4]/a')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#navbarNavDropdown > ul > li:nth-of-type(4) > a')
                                        .click({ force: true });
                                });
                        });
                });
        });

        // Enter Name
        cy.get('main').within(() => {
            cy.get('aria/Enter Your Name')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#MainContent_txtcn1')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="MainContent_txtcn1"]')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#MainContent_txtcn1')
                                        .click({ force: true });
                                });
                        });
                });
        }).type('test lead');

        // Enter Email
        cy.get('main').within(() => {
            cy.get('aria/Enter Your Email Address')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#MainContent_txtem1')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="MainContent_txtem1"]')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#MainContent_txtem1')
                                        .click({ force: true });
                                });
                        });
                });
        }).type('tester35@yopmail.com');

        // Enter Phone Number
        cy.get('main').within(() => {
            cy.get('aria/Your Phone Number')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#MainContent_pn1')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="MainContent_pn1"]')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#MainContent_pn1')
                                        .click({ force: true });
                                });
                        });
                });
        }).type('8887960500');

        // Enter What are you looking to protect?
        cy.get('main').within(() => {
            cy.get('aria/What are you looking to protect? (e.g. Name, Logo and Slogan)')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#MainContent_txttr1')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="MainContent_txttr1"]')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#MainContent_txttr1')
                                        .click({ force: true });
                                });
                        });
                });
        }).type('testing contact recorder');

        // Click on Register My Trademark
        cy.get('main').within(() => {
            cy.get('aria/Register My Trademark')
                .click({ force: true })
                .then(undefined, () => {
                    cy.get('#MainContent_btnSubmit1')
                        .click({ force: true })
                        .then(undefined, () => {
                            cy.xpath('//*[@id="MainContent_btnSubmit1"]')
                                .click({ force: true })
                                .then(undefined, () => {
                                    cy.get('pierce/#MainContent_btnSubmit1')
                                        .click({ force: true });
                                });
                        });
                });
        });

        // Assert navigation to forms page
        cy.url().should('include', '/forms/');
    });
});*/
