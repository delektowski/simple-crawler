describe("Harvesting", () => {

    it('Harvesting GrillParty1', () => {

        // Login for gathering
        cy.loginGrillParty1();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});

