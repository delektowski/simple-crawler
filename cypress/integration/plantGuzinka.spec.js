describe("Guzinka", () => {
  it("Planting Guzinka", () => {
    // Login for planting
    cy.loginGuzinka();

    // Select Bławatki
    cy.get('#lager_arrow_right').click({force: true}).wait(500).click({force: true}).wait(500)

    // Select planting
    cy.get("#anpflanzen")
      .click({ force: true })
      .wait(500);
    // Plant Bławatki
                cy.get('#regal_52').eq(0).click({force:
                true}).wait(500).plantingOrWatering().get('#giessen').click({force:
                true}).wait(500).plantingOrWatering();

     // Plant Podlewanie
     cy.get('#giessen').click({force: true}).wait(500).plantingOrWatering();
    // Wait and logout
    cy.wait(2240).logout();
  });
});
