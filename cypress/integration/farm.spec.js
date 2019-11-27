describe("Enter site", () => {
    for (let i = 0; i < 5; i++) {
        it('crawling', () => {
            //login
            cy.visit('https://www.zieloneimperium.pl/').get('#login_user').type('robinet78')
            cy.get('#login_pass').type('bimber78');
            cy.get('#submitlogin').click({force: true}).wait(1000);

            //select planting
            cy.get('#anpflanzen').click({force: true}).wait(1000);

            //plant lettuce
            cy.get('.e2').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile53_cursor').click({force: true}).wait(1000);
            cy.get('.e2').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile54_cursor').click({force: true}).wait(1000);
            cy.get('.e2').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile55_cursor').click({force: true}).wait(1000);
            cy.get('.e2').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile56_cursor').click({force: true}).wait(1000);
            cy.get('.e2').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile57_cursor').click({force: true}).wait(1000);

            //plant carrot
            cy.get('.e6').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile70_cursor').click({force: true}).wait(1000);
            cy.get('.e6').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile71_cursor').click({force: true}).wait(1000);
            cy.get('.e6').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile72_cursor').click({force: true}).wait(1000);
            cy.get('.e6').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile73_cursor').click({force: true}).wait(1000);
            cy.get('.e6').eq(0).click({force: true}).wait(1000);
            cy.get('#gardenTile74_cursor').click({force: true}).wait(1000);
            cy.get('#logout').click({force: true}).wait(1000000)

            //login
            cy.visit('https://www.zieloneimperium.pl/').get('#login_user').type('robinet78')
            cy.get('#login_pass').type('bimber78');
            cy.get('#submitlogin').click({force: true}).wait(1000);

            // gather lettuce
            cy.get('#ernten').click({force: true}).wait(1000);
            cy.get('#gardenTile53_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile54_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile55_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile56_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile57_cursor').click({force: true}).wait(1000);

            // gather carrots
            cy.get('#gardenTile70_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile71_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile72_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile73_cursor').click({force: true}).wait(1000);
            cy.get('#gardenTile74_cursor').click({force: true}).wait(1000);

            // logout
            cy.get('#logout').click({force: true})
        })
    }

});
