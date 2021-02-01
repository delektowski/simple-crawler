describe("Harvesting", () => {

    it('Harvesting GrillParty2ogrod', () => {

        // Login for gathering
        cy.loginGrillParty();
            // Enter to second garden
            cy.get("#wimpareaCar")
              .click({ force: true })
              .wait(500)
              .get("iframe")
              .then($iframe => {
                const $doc = $iframe.contents();
                cy.wrap($doc.find("img").eq(4)).click();

        // Gather plants
        cy.get('.harvest').click({force: true});
         })
        //  Logout
        cy.logout();
    })
});

