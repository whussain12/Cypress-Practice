describe('Trademark Bridge Automation Test', () => {
    it('Automates the trademark form submission', () => {
      // Step 1: Set viewport
      cy.viewport(1366, 768);
  
      // Step 2: Navigate to the website
      cy.visit('https://www.trademarkbridge.com/');
      cy.title().should('include', 'Trademark Bridge | Expert Trademark, Copyright & Patent Services');
  
      // Step 3: Enter Name
      cy.get('#MainContent_txtcn1').click().type('testlead home');
  
      // Step 4: Enter Email
      cy.get('#MainContent_txtem1').type('test@wajid.csa');
  
      // Step 5: Enter Phone Number
      cy.get('#MainContent_pn1').click().type('5438594354');
  
      // Step 6: Enter "What are you looking to protect?"
      cy.get('#MainContent_txttr1').click().type('testing qa');
  
      // Step 7: Submit the form
      cy.get('#MainContent_btnSubmit1').click();
      cy.url().should('include', '/forms/');
  
      // Step 8: Enter Mark Name
      cy.get('#txtNameSlogan').click().type('test lead');
  
      // Step 9: Select Industry
      cy.get('#ddlIndustry').click(); // Open dropdown
      cy.get('#ddlIndustry').dblclick(); // Double-click to select
  
      // Step 10: Enter Product Information
      cy.get('#txtProduct').click().type('test lead');
      cy.get('#lstProducts').click();
      cy.get('#btnAdd').click();
  
      // Step 11: Select Business Size
      cy.get('#rblSize_3').click();
  
      // Step 12: Enter Address
      cy.get('#txtAddress').click().type('test');
  
      // Step 13: Continue to next step
      cy.get('#btnSubmit').click();
      cy.url().should('include', '/forms/Service');
  
      // Step 14: Select Package
      cy.get('div.text-dark > div:nth-of-type(2) div.pkg-footer').click();
  
      // Step 15: Choose "Elite" Package
      cy.get('#rbElite').click();
  
      // Step 16: Continue to Payment
      cy.get('#btnSubmit').click();
      cy.url().should('include', '/forms/Payment');
    });
  });
  