describe("Bonifacy", () => {

    it('Planting Bonifacy', () => {

        // Login for planting
        cy.loginBonifacy();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);
        
        // Plant słoneczniki
             cy.get('#regal_48').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});
