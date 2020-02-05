describe("Harvesting", () => {

    it('Harvesting Sympatyczna', () => {

        // Login for gathering
        cy.loginSympatyczna();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
