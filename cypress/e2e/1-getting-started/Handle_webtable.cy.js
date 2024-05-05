/// <reference types="cypress" />

describe('Handle webtable', () => {

    it('Handle webtable', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.xpath("//select[@id='zcf_address_country']").select('Italy').should('have.value','Italy');
    });
})
