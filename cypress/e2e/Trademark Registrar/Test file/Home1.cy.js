import Home1 from '../Pages/Home1';

describe('Trademark Registrars Test Suite', () => {

  const home = new Home1();

  beforeEach(() => {
    home.visitPage(); // Navigate to the environment-based URL
  });

  it('Fill out and submit the form', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
<<<<<<< HEAD
      return false; // Prevent test failure
  });
=======
      return false;
    });
    cy.pause(); // Pause to inspect page state
>>>>>>> 95f3f647f38bc80a4c2a422ccbfc5bbd495aadcf
    // Fill out the form fields
    home.fillFullName('Test Lead Home');
    home.fillEmail('tester34@yopmail.com');
    home.fillPhone('8887960500');
    home.fillProtectionDetails('Just Testing');

    // Submit the form
    home.clickSubmit();

    // Verify the success message
<<<<<<< HEAD
    home.verifySuccessMessage('Dear Test Lead Home');
=======
    home.verifySuccessMessage('Thank You!');
>>>>>>> 95f3f647f38bc80a4c2a422ccbfc5bbd495aadcf
  });
});
