describe("Mama Plantacjat", () => {

    it('Planting Plantacjat', () => {

        // Login for planting
        cy.loginPlantacjat();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant pomidory
        cy.get('#regal_5').eq(0).click({force:true}).wait(500).plantingOrWatering()

        // Select watering
//         cy.get('#giessen').click({force:true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(4000).logout()
    })

});
