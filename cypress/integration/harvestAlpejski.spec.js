describe("Harvesting", () => {

    it('Harvesting Alpejski', () => {

        // Login for gathering
        cy.loginAlpejski();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
