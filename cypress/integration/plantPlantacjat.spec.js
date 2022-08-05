describe("Mama Plantacjat", () => {

    it('Planting Plantacjat', () => {

        // Login for planting
        cy.loginPlantacjat();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant ogórki
        cy.get('#regal_12').eq(0).click({force:true}).wait(500).plantingOrWatering()

        // Select watering
//         cy.get('#giessen').click({force:true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(4000).logout()
    })

});
