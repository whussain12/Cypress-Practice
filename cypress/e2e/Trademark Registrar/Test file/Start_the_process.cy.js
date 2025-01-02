import StartTheProcess from '../Pages/Start_the_process';

describe('Trademark Form Automation', () => {
    const starttheprocess = new StartTheProcess(); // Instantiate the page object

    //beforeEach(() => {
        // Set the viewport and visit the application URL before each test
        // starttheprocess.setViewport(); // Default viewport as specified in JSON
        //starttheprocess.visit();
    //});

    /* it('should navigate to the homepage and start the process', () => {
         // Verify navigation and start the process
         starttheprocess.startProcess();
     });*/

    it('should fill the form and submit successfully', () => {
        starttheprocess.visit();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent test failure
        });
        //cy.pause(); // Pause to inspect page state
        // Start the process
        starttheprocess.startProcess();

        // Fill the form fields
        starttheprocess.fillForm(
            'Test Lead Start the Process',   // Full Name
            'jester35@yopmail.com',          // Email
            '8887960500',                    // Phone Number
            'Test the form'                  // Protection Details
        );

        // Submit the home form
        starttheprocess.submitHomeForm();
        cy.url().then((url) => {
            if (url.includes('/thank')) {
                // If redirected to /thank, verify the success message
                starttheprocess.verifySuccessMessage('Thank You!');
            } else if (url.includes('/forms')) {
                // If redirected to /forms, handle the forms page
                starttheprocess.handleFormsPage();   
                starttheprocess.selectStandardPackage();
                starttheprocess.validateFeesSection();
                starttheprocess.selectTrademarkSearch();
                starttheprocess.selectFederalStateSearch();
                starttheprocess.inputAdditionalDetails();
                starttheprocess.selectPackageCheckbox();
                starttheprocess.validatePackageFee();
                starttheprocess.submitContinueForm();
                // After submitting the /forms page form, verify the redirection to /forms/Service
              //  cy.url().should('include', '/forms/Service'); // not ready to execute
            } else {
                // Throw an error if the redirection is unexpected
                throw new Error(`Unexpected redirection: ${url}`);
            }
        });
        /*starttheprocess.selectStandardPackage();
        starttheprocess.validateFeesSection();
        starttheprocess.selectTrademarkSearch();
        starttheprocess.selectFederalStateSearch();
        starttheprocess.inputAdditionalDetails();
        starttheprocess.selectPackageCheckbox();
        starttheprocess.validatePackageFee();
        starttheprocess.submitContinueForm();*/
    });
});

// Verify the success message
// starttheprocess.verifySuccessMessage('Thank You!');
// starttheprocess.handleFormsPage();
//});
//});
