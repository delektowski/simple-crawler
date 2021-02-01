describe("Harvesting", () => {

    it('Harvesting GrillParty1ogrod', () => {

        // Login for gathering
        cy.loginGrillParty();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});

