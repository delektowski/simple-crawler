describe("GrillParty1", () => {

    it('Planting GrillParty1', () => {

        // Login for planting
        cy.loginGrillParty1();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant ogórek
        cy.get('#regal_12').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});

