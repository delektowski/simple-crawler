describe("Harvesting", () => {

    it('Harvesting GrillParty2_1ogrod', () => {

        // Login for gathering
        cy.loginGrillParty2();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
