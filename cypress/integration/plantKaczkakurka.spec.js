describe("Kaczkakurka", () => {

    it('Planting Kaczkakurka', () => {

        // Login for planting
        cy.loginKaczkaKurka();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant nagietki
        cy.get('#regal_49').eq(0).click({force: true}).wait(500).plantingOrWatering().get('#giessen').click({force: true}).wait(500).plantingOrWatering();

        // Wait and logout
        cy.wait(5000).logout()
    })

});
