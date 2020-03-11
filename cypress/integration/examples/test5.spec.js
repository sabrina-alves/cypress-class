/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });
  it('should look for the sign in button', () => {
    cy.get('[title="Google apps"]').click();
  });
});
