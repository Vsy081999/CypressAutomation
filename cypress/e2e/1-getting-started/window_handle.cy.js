/// <reference types="cypress" />

describe('Practice codes ', () => {

    it.only('child window approach 1', () => {
        cy.visit('/');
        // cy.visit("https://the-internet.herokuapp.com/windows");
        cy.xpath("//a[contains(text(),'Click Here')]").invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')
        cy.xpath("//*[contains(text(),'New Window')]").invoke('text').then((value) => {
            cy.log(value);
        })
        cy.go('back');

        it('child window approach 2', () => {
            cy.visit("https://the-internet.herokuapp.com/windows");
            cy.xpath("//a[contain(text(),'Click Here')]").then((e) => {
                let url = e.prop('href');
                cy.visit(url);
            })
        })
    })
})
