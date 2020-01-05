describe("Harvesting", () => {

    it('Harvesting Tatabonifacego', () => {

        // Login for gathering
        cy.loginTataBonifacego();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
