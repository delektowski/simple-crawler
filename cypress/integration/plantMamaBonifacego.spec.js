describe("Mama bonifacego", () => {

    it('Planting mamabonifacego', () => {

        // Login for planting
        cy.loginMamaBonifacego();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant sałata
        cy.get('#regal_2').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(4000).logout()
    })

});
