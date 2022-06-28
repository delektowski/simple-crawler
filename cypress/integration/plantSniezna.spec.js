describe("Snieżna", () => {

    it('Planting Śnieżna', () => {

        // Login for planting
        cy.loginSniezna();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant pomidory
        cy.get('#regal_5').eq(0).click({force:true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});
