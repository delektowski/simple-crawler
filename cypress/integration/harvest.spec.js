describe("Harvest", () => {
    it('harvesting', () => {
        // Login for gathering
        cy.login();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
