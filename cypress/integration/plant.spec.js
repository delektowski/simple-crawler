describe("Plant", () => {
    it('planting', () => {

        // Check if there are planting obstacles
        const checkIsNoObstacle = (str) => {
            const regex = /baumstumpf|steine|maulwurf|unkraut/ig;
            return !regex.test(str);
        };

        // Login for planting
        cy.login();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(500);

        // Plant
        // cy.get('.e14').click({force: true}).wait(500);
        for (let j = 1; j <= 204; j++) {
            cy.get(`#gardenTile${j}`).children().eq(0).invoke('attr', 'style').then(str => {
                if (checkIsNoObstacle(str)) {
                    cy.get(`#gardenTile${j}`).click({force: true}).wait(500);
                }
            })
        }

        // Watering plants
        // cy.get('.water').click({force: true});

        // Logout and wait
        cy.logout()
    })
});
