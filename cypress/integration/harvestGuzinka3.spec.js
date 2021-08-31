describe("Harvesting", () => {

  it('Harvesting Guzinka2', () => {

    // Login for gathering
    cy.loginGuzinka();


 // Enter to second garden
 cy.get('#wimpareaCar').click({force: true}).wait(500).get("iframe").then( $iframe => {
   const $doc = $iframe.contents();
   cy.wrap($doc.find("#map_garden3")).click();

   // Gather plants
   cy.get('.harvest').click({force: true});
   })

 //  Logout
 cy.logout();
  })
});
