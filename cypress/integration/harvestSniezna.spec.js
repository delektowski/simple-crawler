describe("Harvesting", () => {

    it('Harvesting Snieżna', () => {

        // Login for gathering
        cy.loginSniezna();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
