describe("Guzinka2", () => {
  it("Planting Guzinka2", () => {
    // Login for planting
    cy.loginGuzinka();

    // Select planting
    cy.get("#anpflanzen")
      .click({ force: true })
      .wait(500);

    // Enter to second garden
    cy.get("#wimpareaCar")
      .click({ force: true })
      .wait(500)
      .get("iframe")
      .then($iframe => {
        const $doc = $iframe.contents();

        cy.wrap($doc.find("#map_garden3")).click();
     // Select Bławatki
    cy.get('#lager_arrow_right').click({force: true}).wait(500).click({force: true}).wait(500)


    // Plant Bławatki
    cy.get('#regal_50').eq(0).click({force: true}).wait(500).plantingOrWatering()
        // Plant Podlewanie
     cy.get('#giessen').click({force: true}).wait(500).plantingOrWatering();
})
    // Wait and logout
    cy.wait(5000).logout();
  });
});
