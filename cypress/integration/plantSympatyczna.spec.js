describe("Mama sympatyczna", () => {

    it('Planting sympatyczna', () => {

        // Login for planting
        cy.loginSympatyczna();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant rzodkiewka
        cy.get('#regal_14').eq(0).click({force:true}).wait(500).plantingOrWatering()

        // Select watering
         cy.get('#giessen').click({force:true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(4000).logout()
    })

});
