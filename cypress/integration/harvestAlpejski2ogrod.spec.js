describe("Harvesting", () => {

    it('Harvesting Alpejski2ogrod', () => {

        // Login for gathering
        cy.loginAlpejski();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
