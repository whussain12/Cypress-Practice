/*const getElement = (selectors) => {
  return cy.wrap(null).then(() => {
    let found = false; // Track if an element was found
    for (let selector of selectors) {
      cy.log(`Trying selector: ${selector}`);
      cy.get(selector, { timeout: 5000 }) // Add a timeout for robustness
        .then(($el) => {
          if (!found && $el.length > 0) {
            found = true; // Mark as found
            return cy.wrap($el); // Wrap the element and return
          }
        })
        .catch(() => {
          cy.log(`Selector failed: ${selector}`); // Log failure, continue to next
        });
    }
    // If no element is found, throw an error
    if (!found) {
      throw new Error('No valid selector found for: ' + selectors.join(', '));
    }
  });
};
describe('Applitools Demo Test', () => {
  it('should complete the login process and verify logo', () => {
    // Set the viewport
    cy.viewport(1349, 641);

    // Navigate to the URL
    cy.visit('https://demo.applitools.com/');
    
    // Assert the title of the page
    cy.title().should('eq', 'ACME Demo App by Applitools');

    // Username field
    getElement([
      "[id='username']",
      "xpath///*[@id=\"username\"]",
      "pierce/[id='username']",
      "aria/Enter your username"
    ]).then(($el) => {
      cy.wrap($el).click({ offsetX: 58.5, offsetY: 15.59375 }).type('test');
    });

    // Password field
    getElement([
      "[id='password']",
      "xpath///*[@id=\"password\"]",
      "pierce/[id='password']",
      "aria/Enter your password"
    ]).then(($el) => {
      cy.wrap($el).type('test');
    });

    // Sign-in button
    getElement([
      "[id='log-in']",
      "xpath///*[@id=\"log-in\"]",
      "pierce/[id='log-in']",
      "aria/Sign in",
      "text/Sign in"
    ]).then(($el) => {
      cy.wrap($el).click({ offsetX: 55.5, offsetY: 11.828125 });
    });

    // Assert navigation to the dashboard
    cy.url().should('include', '/app.html');

    // Wait for the ACME logo to be visible
    getElement([
      "div.logo-label",
      "xpath//html/body/div/div[1]/div[1]/a/div[2]",
      "pierce/div.logo-label",
      "text/ACME"
    ]).then(($el) => {
      cy.wrap($el).should('be.visible');
    });
  });
});
*/