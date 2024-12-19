import TrademarkPage  from "../Pages/Home";
describe('Trademark Registration Tests', () => {
  const trademarkPage = new TrademarkPage();

  it('should successfully submit the trademark form', () => {
    // Visit the page
    trademarkPage.visit();

    // Fill out the form
    trademarkPage.fillForm('John Doe', 'john.doe@example.com', '1234567890', 'Testing trademark registration');

    // Submit the form
    trademarkPage.submitForm();

     //Verify the success message
    trademarkPage.verifySuccessMessage('Dear John Doe,');
  });
});
