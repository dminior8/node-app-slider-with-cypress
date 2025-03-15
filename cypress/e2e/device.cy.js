const viewports = [
    ['ipad-2', 'landscape'],
    ['iphone-x', 'portrait'],
    ['samsung-s10', 'portrait']
];

describe('Swiper on different devices', function () {
    viewports.forEach(([device, orientation]) => {
        it(`Testing if slider works on: ${device} (${orientation})`, function () {
            cy.viewport(device, orientation);
            cy.visit('http://localhost:3000');
            cy.get('.swiper-button-next').click({ force: true });
            cy.wait(2000);
            cy.get('.swiper-slide-active').should('contain', 'London');
        });
        
    });
});
