describe("Harvesting", () => {

    it('Harvesting Alpejski', () => {

        // Login for gathering
        cy.loginBonifacy();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
