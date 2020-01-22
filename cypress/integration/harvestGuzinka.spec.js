describe("Harvesting", () => {

  it('Harvesting Guzinka', () => {

    // Login for gathering
    cy.loginGuzinka();

    // Gather plants
    cy.get('.harvest').click({force: true});

    //  Logout
    cy.logout();
  })
});
