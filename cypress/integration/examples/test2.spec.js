/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });
  it('should click on the about link', () => {
    cy.get('[id=hptl] a')
      .eq(0)
      .click();

    cy.url().should('include', 'about');
  });
});
