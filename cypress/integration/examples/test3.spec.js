/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });
  it('should click on the image google and stay on the same page', () => {
    cy.get('[id=hplogo]').click();
    cy.get('[id=hplogo]').should('exist');
  });
});
