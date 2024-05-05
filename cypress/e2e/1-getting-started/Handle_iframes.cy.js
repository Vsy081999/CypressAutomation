/// <reference types="cypress" />

describe('Handle frames ', () => {

    it.only('Handle frames Approach 1', () => {
        cy.visit('/');
        // cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe = cy.xpath("//iframe[@id='mce_0_ifr']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
        iframe.type('welcome');
    })

    it('Handle frames Approach 2', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getiframe("//iframe[@id='mce_0_ifr']").clear().type('this is me');



    })
})