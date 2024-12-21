export class StartTheProcess {
    constructor() {
        // Define element selectors based on JSON home page start the process button
        this.startProcessButton = 'div.body-content a.btn-banner';
        this.fullNameField = '#txtcnsite';
        this.emailField = '#txtemsite';
        this.phoneField = '#pnsite';
        this.protectionField = '#txttrsite';
        this.submitHomeButton = '#btnSubmitsite';
        this.successMessage = 'h2';

        // Selectors for elements on the /forms page
        this.nameSloganField = '#txtNameSlogan';
        this.industryDropdown = '#ddlIndustry';
        this.productField = '#txtProduct';
        this.addProductButton = '#btnAdd';
        this.addressField = '#txtAddress';
        this.formsSubmitButton = '#btnSubmit';
        // Page selectors based on /formservices JSON
        this.standardPackageRadio = '#rbStandard';
        this.feesSection = '#ptotal';
        this.searchCheckbox = '#chkSearch';
        this.federalStateRadio = '#rbFSR';
        this.additionalInput = 'div.d-flex input';
        this.packageCheckbox = '#chkGFF';
        this.packageFee = '#gfees';
        this.continueButton = '#btnSubmit';

        // Define the environment and URL based on the environment
        this.environment = Cypress.env('ENV') || 'test';
        this.url = this.getUrlBasedOnEnvironment();
    }

    // Determine the URL based on the environment
    getUrlBasedOnEnvironment() {
        if (this.environment === 'test') {
            return Cypress.env('test_url_trademark_registrars');
        } else if (this.environment === 'prod') {
            return Cypress.env('prod_url_trademark_registrars');
        } else {
            throw new Error(`Unknown environment: ${this.environment}`);
        }
    }

    // Visit the Home URL
    visit() {
        cy.visit(this.url);
    }

    // Set viewport dimensions
    /*setViewport(width = 1349, height = 641) {
        cy.viewport(width, height);
    }*/

    // Click the "Start the process" button
    startProcess() {
        cy.get(this.startProcessButton).click();
    }

    // Fill the form
    fillForm(fullName, email, phone, protectionDetails) {
        cy.get(this.fullNameField).type(fullName);
        cy.get(this.emailField).type(email);
        cy.get(this.phoneField).type(phone);
        cy.get(this.protectionField).type(protectionDetails);
    }
      // Submit the Home form
      submitHomeForm() {
        cy.get(this.submitHomeButton).click();
      }
    // Verify success message on the Thank You page
    verifySuccessMessage(expectedMessage = 'Thank You!') {
        cy.contains(this.successMessage, expectedMessage).should('be.visible');
    }

    // Handle interactions on the /forms page
    handleFormsPage() {
        // Fill the "Enter Mark Here" field
        cy.get(this.nameSloganField).type('Test Lead');

        // Select an industry from the dropdown
        cy.get(this.industryDropdown).select('Construction and Repair Services');

        // Add a product
        cy.get(this.productField).type('Clothes');
        cy.get(this.addProductButton).click();

        // Fill the address field
        cy.get(this.addressField).type('Testing Address');

        // Submit the form on /forms page
        cy.get(this.formsSubmitButton).click();

        // Verify redirection after submission
        cy.url().should('include', '/forms/Service');

    }

    //Handle interactions on the form/services page
    selectStandardPackage() {
        cy.get(this.standardPackageRadio).click();
      }
      
      validateFeesSection() {
        cy.get(this.feesSection).should('be.visible');
      }
      
      selectTrademarkSearch() {
        cy.get(this.searchCheckbox).click();
      }
      
      selectFederalStateSearch() {
        cy.get(this.federalStateRadio).click();
      }
      
      inputAdditionalDetails() {
        cy.get(this.additionalInput).click();
      }
      
      selectPackageCheckbox() {
        cy.get(this.packageCheckbox).click();
      }
      
      validatePackageFee() {
        cy.get(this.packageFee).should('be.visible');
      }
      
      submitContinueForm() {
        cy.get(this.continueButton).click();
        cy.url().should('include', '/forms/Payment');
      }

    // Submit the form
    /*submitForm() {
        cy.get(this.submitButton).click();*/
        // Verify redirection to the next step
        // cy.url().should('include', '/forms/Service'); //not ready to execute

        // Validate URL after submission and proceed based on the redirection
        /* cy.url().then((url) => {
             if (url.includes('/thank')) {
                 this.verifySuccessMessage(); // Verify success message for /thank page
 
             } else if (url.includes('/forms')) {
                 this.handleFormsPage(); // Handle further steps on /forms page
             }
             else {
                 throw new Error('Unexpected redirection after form submission');
             }
         });*/
    }
//

export default StartTheProcess;
