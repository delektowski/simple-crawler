describe("Harvesting", () => {

    it('Harvesting Finezyjny', () => {

        // Login for gathering
        cy.loginFinezyjny();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
