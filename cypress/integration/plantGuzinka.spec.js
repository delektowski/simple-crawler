describe("Guzinka", () => {
  it("Planting Guzinka", () => {
    // Login for planting
    cy.loginGuzinka();

    // Select planting
    cy.get("#anpflanzen")
      .click({ force: true })
      .wait(500);

        // Plant rzodkiewki
    cy.get('#regal_12').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

    // Wait and logout
    cy.wait(2240).logout();
  });
});
