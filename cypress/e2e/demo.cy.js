/* ==== Test Created with Cypress Studio ==== */
it('demo trademark bridge', function () {
    /* ==== Generated with Cypress Studio ==== */
     //cy.visit('www.trademarkbridge.com');
   cy.visit('http://217.76.53.78:8111/');
    cy.get('#MainContent_txtcn1').clear();
    cy.get('#MainContent_txtcn1').type('test lead home');
    cy.get('#MainContent_txtem1').clear();
    cy.get('#MainContent_txtem1').type('jester35@yopmail.com');
    cy.get('#MainContent_pn1').clear('8743');
    cy.get('#MainContent_pn1').type('8887960500');
    cy.get('#MainContent_txttr1').clear('j');
    cy.get('#MainContent_txttr1').type('just for testing again and again');
    //cy.get('#MainContent_btnSubmit1').click();
    //cy.get('.common-title').click();
    //cy.get('.common-title').should('have.text', 'Thank You!');
    //cy.get(':nth-child(4) > .nav-link').click();
    cy.get('#MainContent_txtcn1').clear('tes');
    cy.get('#MainContent_txtcn1').type('test lead home');
    //cy.get('#MainContent_txtem1').clear('test@wajid.csa');
    cy.get('#MainContent_txtem1').type('jester35@yopmail.com');
    cy.get('#MainContent_pn1').clear('54');
    cy.get('#MainContent_pn1').type('8887960500');
    cy.get('#MainContent_txttr1').clear('te');
    cy.get('#MainContent_txttr1').type('testing contact');
    cy.get('#MainContent_btnSubmit1').click();
    //cy.get('.common-title').click();
    //cy.get('.common-title').should('have.text', 'Thank You!');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.navbar-brand > img').click();
    cy.get('#navbarDropdownMenuLink').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('#tab1 > .row > .col-md-12 > .mm-list > :nth-child(1) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('#tab1 > .row > .col-md-12 > .mm-list > :nth-child(2) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('#tab1 > .row > .col-md-12 > .mm-list > :nth-child(3) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('#tab1 > .row > .col-md-12 > .mm-list > :nth-child(4) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('.col-md-12 > .mm-list > :nth-child(6) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('.row > :nth-child(2) > .mm-list > :nth-child(1) > a').click();
    cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get('.row > :nth-child(2) > .mm-list > :nth-child(3) > a').click();cy.get('#navbarDropdownMenuLink').trigger('mouseover')
    cy.get(':nth-child(2) > .nav-link').click();

    // this is just for testing to validate if local code is pushed to git
    //adding another line today 12/12
    //adding other line to verify the trigger
    /* ==== End Cypress Studio ==== */
});