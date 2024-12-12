describe('Trademark Bridge Registration', () => {
    it('fills out the registration form with retries', () => {
      // Set viewport size (optional)
      //cy.viewport(537, 641);
  
      // Navigate to the website
      cy.visit('https://www.trademarkbridge.com/');
  
      // Assertions can be added here to verify the initial page load
  
      const clickElement = (target, selectors) => {
        let clicked = false;
        for (const selector of selectors) {
          try {
            cy.get(selector).click({ offsetX: 58, offsetY: 26.65625 }); // Adjust offsets if needed
            clicked = true;
            break;
          } catch (error) {
            // Handle potential errors during click attempts
            console.warn(`Failed to click element with selector: ${selector}`);
          }
        }
        if (!clicked) {
          throw new Error('Failed to click any element using provided selectors.');
        }
      };
  
      const fillElement = (target, selectors, value) => {
        let filled = false;
        for (const selector of selectors) {
          try {
            cy.get(selector).type(value);
            filled = true;
            break;
          } catch (error) {
            console.warn(`Failed to fill element with selector: ${selector}`);
          }
        }
        if (!filled) {
          throw new Error('Failed to fill any element using provided selectors.');
        }
      };
  
      const waitForElementVisible = (target, selectors) => {
        let found = false;
        for (const selector of selectors) {
          try {
            cy.get(selector).should('be.visible');
            found = true;
            break;
          } catch (error) {
            console.warn(`Failed to find element with selector: ${selector}`);
          }
        }
        if (!found) {
          throw new Error('Failed to find any element using provided selectors.');
        }
      };
  
      // Fill out the form with retries
      clickElement('main', [
        '[id="MainContent_txtcn12"]',
        'xpath///*[@id="MainContent_txtcn1"]',
        'pierce/[id="MainContent_txtcn1"]',
        'aria/Enter Your Name'
      ]);
      fillElement('main', ['[id="MainContent_txtcn12"]',
        'xpath///*[@id="MainContent_txtcn1"]',
        'pierce/[id="MainContent_txtcn1"]',
        'aria/Enter Your Name'], 'test lead'); // Replace "..." with same selectors as click
  
      clickElement('main', [
        '[id="MainContent_txtem1"]',
        'xpath///*[@id="MainContent_txtem1"]',
        'pierce/[id="MainContent_txtem1"]',
        'aria/Enter Your Email Address'
      ]);
      fillElement('main', ['[id="MainContent_txtem1"]',
        'xpath///*[@id="MainContent_txtem1"]',
        'pierce/[id="MainContent_txtem1"]',
        'aria/Enter Your Email Address'], 'tester35@yopmail.com'); // Replace "..." with same selectors as click
  
      clickElement('main', [
        '[id="MainContent_pn1"]',
        'xpath///*[@id="MainContent_pn1"]',
        'pierce/[id="MainContent_pn1"]',
        'aria/Your Phone Number'
      ]);
      fillElement('main', ['[id="MainContent_pn1"]',
        'xpath///*[@id="MainContent_pn1"]',
        'pierce/[id="MainContent_pn1"]',
        'aria/Your Phone Number'], '8887960500'); // Replace "..." with same selectors as click
  
      clickElement('main', [
        '[id="MainContent_txttr1"]',
        'xpath///*[@id="MainContent_txttr1"]',
        'pierce/[id="MainContent_txttr1"]',
        'aria/What are you looking to protect? (e.g. Name, Logo and Slogan)'
      ]);
      fillElement('main', ['[id="MainContent_txttr1"]',
        'xpath///*[@id="MainContent_txttr1"]',
        'pierce/[id="MainContent_txttr1"]',
        'aria/What are you looking to protect? (e.g. Name, Logo and Slogan)'], 'just testing'); // Replace "..." with same selectors as click
  
      clickElement('main', [
        '[id="MainContent_btnSubmit1"]',
        'xpath///*[@id="MainContent_btnSubmit1"]',
        'pierce/[id="MainContent_btnSubmit1"]',
        'aria/Register My Trademark'
      ]);
  
      // Assertions can be added here to verify successful form submission
  
     // waitForElementVisible('main', ['li.is-active > p', ...]); // Replace "..." with other selectors
    });
  });