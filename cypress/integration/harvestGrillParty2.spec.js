describe("Harvesting", () => {

    it('Harvesting GrillParty', () => {

        // Login for gathering
        cy.loginGrillParty2();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
