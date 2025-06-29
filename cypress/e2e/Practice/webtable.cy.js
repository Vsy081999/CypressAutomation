/// <reference types="cypress" />

describe('Webtable', () => {

    it('Handle webtable', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.xpath("//h2[contains(text(),'Pagination Web Table')]").scrollIntoView();

        cy.get("#productTable tbody tr").each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    if ($col.text().trim() == 'Smartphone'.trim()) {
                        cy.wait(2000);
                        cy.get("input[type='checkbox']").click({ force: true });
                        cy.get('td').eq(2).invoke('text').then((value) => {
                            expect(value.trim()).to.equal('$10.99'.trim());

                        })
                    }
                });
            });
        });
    });
});