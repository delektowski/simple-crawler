describe("Plant", () => {
    it('planting', () => {

        // Check if there are planting obstacles
        const checkIsNoObstacle = (str) => {
            const regex = /baumstumpf|steine|maulwurf/ig;
            return !regex.test(str);
        };

        // Login for planting
        cy.login();

        // Select planting
        cy.get('#anpflanzen').click({force: true}).wait(1000);

        // Plant lettuce
        for (let j = 1; j <= 205; j++) {
            cy.get(`#gardenTile${j}`).children().eq(0).invoke('attr', 'style').then(str => {
                if (checkIsNoObstacle(str)) {
                    cy.get(`#gardenTile${j}`).click({force: true}).wait(1000);
                }
            })
        }

        // Watering plants
        // cy.get('.water').click({force: true});

        // Logout and wait
        cy.logout()
    })
});
