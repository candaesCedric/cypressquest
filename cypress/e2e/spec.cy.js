describe("go to backmarket", () => {
  it("accept cookies", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get("button").contains("OK").click();
    cy.wait(1000)
  });
  describe("register to backmarket", () => {
    it("insert registration data"), () => {
      cy.get('form')
    };
  });
});
