describe("Mama sympatyczna", () => {

    it('Planting sympatyczna', () => {

        // Login for planting
        cy.loginSympatyczna();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

         // Plant słonecznik
         cy.get('#regal_48').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();


        // Wait and logout
        cy.wait(4000).logout()
    })

});
