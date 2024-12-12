/*describe('Trademark Bridge Form Automation', () => {
    it('should complete and submit the form', () => {
      // Set the viewport
      cy.viewport(537, 641);
  
      // Navigate to the URL
      cy.visit('https://www.trademarkbridge.com/');
  
      // Assert the title of the page
      cy.title().should('eq', 'Trademark Bridge | Expert Trademark, Copyright & Patent Services');
  
      // Helper function to handle multiple selectors
      const getElement = (selectors) => {
        for (let selector of selectors) {
          try {
            return cy.get(selector);
          } catch (e) {
            // Log the error and continue with the next selector
            cy.log(`Selector failed: ${selector}`);
          }
        }
        throw new Error('No valid selector found');
      };
  
      // Name field
      getElement([
        "[id='MainContent_txtcn1']",
        "xpath///*[@id=\"MainContent_txtcn1\"]",
        "pierce/[id='MainContent_txtcn1']",
        "aria/Enter Your Name"
      ])
        .click({ offsetX: 58, offsetY: 26.65625 })
        .type('test lead');
  
      // Email field
      getElement([
        "[id='MainContent_txtem1']",
        "xpath///*[@id=\"MainContent_txtem1\"]",
        "pierce/[id='MainContent_txtem1']",
        "aria/Enter Your Email Address"
      ])
        .click({ offsetX: 80, offsetY: 24.65625 })
        .type('tester35@yopmail.com');
  
      // Phone number field
      getElement([
        "[id='MainContent_pn1']",
        "xpath///*[@id=\"MainContent_pn1\"]",
        "pierce/[id='MainContent_pn1']",
        "aria/Your Phone Number"
      ])
        .click({ offsetX: 162, offsetY: 24.65625 })
        .type('8887960500');
  
      // Protect field
      getElement([
        "[id='MainContent_txttr1']",
        "xpath///*[@id=\"MainContent_txttr1\"]",
        "pierce/[id='MainContent_txttr1']",
        "aria/What are you looking to protect? (e.g. Name, Logo and Slogan)"
      ])
        .click({ offsetX: 165, offsetY: 31.65625 })
        .type('just testing');
  
      // Submit button
      getElement([
        "[id='MainContent_btnSubmit1']",
        "xpath///*[@id=\"MainContent_btnSubmit1\"]",
        "pierce/[id='MainContent_btnSubmit1']",
        "aria/Register My Trademark"
      ])
        .click({ offsetX: 69, offsetY: 24.65625 });
  
      // Assert navigation to the forms page
      cy.url().should('include', '/forms/');
  
      // Wait for an element on the new page to be visible
      getElement([
        "li.is-active > p",
        "xpath///*[@id=\"content\"]/div/div/div[1]/div/ul/li[1]/p",
        "pierce/li.is-active > p",
        "text/Contact Details"
      ]).should('be.visible');
    });
  });
  */