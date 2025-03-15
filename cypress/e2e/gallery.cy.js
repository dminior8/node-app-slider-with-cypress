describe('Gallery Display Test', function(){
    it('Checks if the gallery is displayed correctly', function () {
        cy.visit('http://localhost:3000');

        cy.get('.swiper-wrapper').should('be.visible');

        cy.get('.swiper-slide').should('have.length.at.least', 3);
        cy.get('.swiper-slide-active').should('be.visible');

        cy.get('.swiper-button-prev').should('be.visible').click();
        cy.wait(2000);
        cy.get('.swiper-button-next').should('be.visible').click();
    });
});