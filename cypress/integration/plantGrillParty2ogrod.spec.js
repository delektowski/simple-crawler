describe("GrillParty2ogrod", () => {

    it('Planting GrillParty2ogrod', () => {

        // Login for planting
        cy.loginGrillParty();

        // Enter to second garden
        cy.get("#wimpareaCar")
          .click({ force: true })
          .wait(500)
          .get("iframe")
          .then($iframe => {
          const $doc = $iframe.contents();
          cy.wrap($doc.find("img").eq(4)).click();

          // Select planting
          cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant rzodkiewka
        cy.get('#regal_14').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();
       })
        // Wait and logout
        cy.wait(5000).logout()
    })

});

