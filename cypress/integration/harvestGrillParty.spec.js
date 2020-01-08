describe("Harvesting", () => {

    it('Harvesting GrillParty', () => {

        // Login for gathering
        cy.loginGrillParty();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
