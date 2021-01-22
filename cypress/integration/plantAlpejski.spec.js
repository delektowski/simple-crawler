describe("Alpejski", () => {

    it('Planting Alpejski', () => {

        // Login for planting
        cy.loginAlpejski();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant truskawki
        cy.get('#regal_3').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});
