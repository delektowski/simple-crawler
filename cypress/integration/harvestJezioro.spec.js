describe("Harvesting", () => {

    it('Harvesting Jezioro', () => {

        // Login for gathering
        cy.loginJezioro();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
