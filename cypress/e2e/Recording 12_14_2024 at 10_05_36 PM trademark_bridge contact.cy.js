describe("Recording 12/14/2024 at 10:05:36 PM trademark_bridge contact", () => {
   it("tests Recording 12/14/2024 at 10:05:36 PM trademark_bridge contact", () => {
     //cy.viewport(1358, 641);
     cy.visit("https://www.trademarkbridge.com/contact-us");
     cy.get("#navbarNavDropdown > ul > li:nth-of-type(4) > a").click();
     cy.location("href").should("eq", "https://www.trademarkbridge.com/contact-us");
     cy.get("#MainContent_txtcn1").click().type("test lead contact recorder automation cypress ci cd");
     cy.get("#MainContent_txtem1").click();
     cy.get("#MainContent_txtem1").type("tester37@yopmail.com");
     cy.get("#MainContent_pn1").click();
     cy.get("#MainContent_pn1").type("8887960500");
     cy.get("#MainContent_txttr1").click();
     cy.get("#MainContent_txttr1").type("leads testing on automation recording");
     cy.get("#MainContent_btnSubmit1").click();
     cy.location("href").should("eq", "https://www.trademarkbridge.com/thank"); //added a commentgit 
   });
})