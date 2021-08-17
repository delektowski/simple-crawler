describe("GrillParty", () => {

    it('Planting GrillParty1ogrod', () => {

        // Login for planting
        cy.loginGrillParty();
        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant ogórki
        cy.get('#regal_12').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();
    
        // Wait and logout
        cy.wait(5000).logout()
    })

});

