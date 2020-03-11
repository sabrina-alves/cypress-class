/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });
  it('should look for Im Feeling Lucky button and click', () => {
    cy.get('[class="RNmpXc"]').click();
  });
});
