describe("Harvesting", () => {

    it('Harvesting Kaczkakurka', () => {

        // Login for gathering
        cy.loginKaczkaKurka();

        // Gather plants
        cy.get('.harvest').click({force: true});

        //  Logout
        cy.logout();
    })
});
