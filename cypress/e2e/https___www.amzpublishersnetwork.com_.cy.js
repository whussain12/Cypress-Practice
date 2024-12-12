/*describe("https://www.amzpublishersnetwork.com/", () => {
  it("tests https://www.amzpublishersnetwork.com/", () => {
    cy.viewport(1349, 641);
    cy.visit("https://www.amzpublishersnetwork.com/");
    cy.get("div.page-wrapper [id='thm-logo']").click();
    cy.location("href").should("eq", "https://www.amzpublishersnetwork.com/");
    cy.get("xpath///*[@id=\"navbarSupportedContent\"]/ul/li[1]/a").click();
    cy.location("href").should("eq", "https://www.amzpublishersnetwork.com/");
    cy.get("[id='MainContent_txtcn2']").click();
    cy.get("[id='MainContent_txtcn2']").type("test lead home");
    cy.get("[id='MainContent_txtem2']").type("test@testing.com.pk");
    cy.get("[id='MainContent_pn2']").click();
    cy.get("[id='MainContent_pn2']").type("3475948579");
    cy.get("[id='MainContent_tr']").click();
    cy.get("[id='MainContent_tr']").type("BOOK ILLUSTRATIONS");
    cy.get("[id='MainContent_btnSubmit']").click();
    cy.location("href").should("eq", "https://www.amzpublishersnetwork.com/thank");
    cy.get("xpath///*[@id=\"ctl01\"]/div[3]/section[1]/div/div/div/h1").rightclick();
    cy.get("xpath///*[@id=\"ctl01\"]/div[3]/section[1]/div/div/div").click();
  });
});
*/