describe("Finezyjny", () => {

    it('Planting Finezyjny', () => {

        // Login for planting
        cy.loginFinezyjny();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant marchewki
        cy.get('#regal_6').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});
