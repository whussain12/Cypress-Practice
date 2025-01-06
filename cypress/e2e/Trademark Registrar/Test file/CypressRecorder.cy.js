/* ==== Test Created with Cypress Studio ==== */
it('test', function() {
  /* ==== Generated with Cypress Studio ==== */
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent test failure
});
  cy.visit('https://trademarkregistrars.com');
  cy.get('#MainContent_txtcn').clear('te');
  cy.get('#MainContent_txtcn').type('test lead home');
  cy.get('#MainContent_txtem').clear('te');
  cy.get('#MainContent_txtem').type('test@yopmail.com');
  cy.get('#MainContent_pn').clear('8887960500');
  cy.get('#MainContent_pn').type('8887960500');
  cy.get('#MainContent_txttr').clear('j');
  cy.get('#MainContent_txttr').type('just testing');
  cy.get('.lp-banner-form > .header-form').click();
  cy.get('#MainContent_btnSubmit').click();
  cy.visit('https://trademarkregistrars.com/forms');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#txtNameSlogan').clear('tes');
  cy.get('#txtNameSlogan').type('test lead');
  //cy.get('.inner').click();
  cy.get('#ddlIndustry').select('Furniture');
  cy.get('#txtProduct').clear('Clothes');
  cy.get('#txtProduct').type('Clothes');
  cy.get('#btnAdd').click();
  cy.get('#txtAddress').click();
  cy.get('#btnSubmit').click();
  cy.get('#rbStandard').check();
  cy.get('#fees').click();
  cy.get('#fees').should('have.text', '$45');
  cy.get('#rbFSR').check();
  cy.get('.col-lg-3 > .box-1').click();
  cy.get('#sfees').should('have.text', '$99');
  cy.get('.col-lg-3 > .box-1').click();
  cy.get('#ptotal').should('have.text', '$144');
  cy.get('.mt-1').check();
  cy.get('#rb1x').check();
  cy.get('.col-lg-3 > .box-1').click();
  cy.get('#wwwli > .fflex').click();
  cy.get('#wfees').click();
  cy.get('#wfees').should('have.text', '$149');
 // cy.get('.col-lg-3').click();
  cy.get('#ptotal').should('have.text', '$293');
  cy.get('#chkGFF').check();
  cy.get('.col-lg-3 > .box-1').click();
  cy.get('#ptotal').should('have.text', '$643');
  cy.get('#btnSubmit').click();
  //cy.get('strong').click();
  cy.visit('https://www.trademarkregistrars.com/forms/Payment');
  cy.get('strong').should('have.text', '$643');
  /* ==== End Cypress Studio ==== */
});