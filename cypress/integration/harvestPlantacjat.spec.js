describe("Harvesting", () => {

    it('Harvesting Plantacjat', () => {

        // Login for gathering
        cy.loginPlantacjat();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
