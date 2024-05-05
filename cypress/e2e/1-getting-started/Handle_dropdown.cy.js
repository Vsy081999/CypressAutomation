/// <reference types="cypress" />

describe('Handle dropdown', () => {

    it('Handle dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.xpath("//select[@id='zcf_address_country']").select('Italy').should('have.value','Italy');
    });

    it('Handle dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.xpath("//span[@id='select2-billing_country-container']").click();
        cy.xpath("//input[@class='select2-search__field']").type('Italy').type("{enter}")
    });

    it.only('Handle autosuggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/");
        cy.xpath("//input[@id='searchInput']").type('delhi');

        cy.xpath("//a[@class='suggestion-link']").contains('Delhi University').click();
    });


})
