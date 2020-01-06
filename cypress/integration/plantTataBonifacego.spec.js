describe("Tata bonifacego", () => {

    it('Planting tatabonifacego', () => {

        // Login for planting
        cy.loginTataBonifacego();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant nagietki
        cy.get('#regal_6').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(4000).logout()
    })

});