/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });
  it('should load the login page correctly', () => {
    cy.get('[jsname=RNNXgb]').type('Javascript map filter{enter}');
    cy.get('[jsname=RNNXgb]').should('not.have.value', '[id=hptl]');
  });
});
