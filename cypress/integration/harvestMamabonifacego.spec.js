describe("Harvesting", () => {

    it('Harvesting Mamabonifacego', () => {

        // Login for gathering
        cy.loginMamaBonifacego();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
