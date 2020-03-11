/// <reference types="Cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.google.ca');
  });

  it('should load the login page correctly', () => {
    cy.get('[jsname=RNNXgb]').type('Javascript map filter{enter}');
    cy.get('[jsname=RNNXgb]').should('not.have.value', '[id=hptl]');
  });

  it('should click on the about link', () => {
    cy.get('[id=hptl] a')
      .eq(0)
      .click();
    cy.url().should('include', 'about');
  });

  it('should click on the image google and stay on the same page', () => {
    cy.get('[id=hplogo]').click();
    cy.get('[id=hplogo]').should('exist');
  });

  it('should click for the sign in button', () => {
    cy.get('[id="gb_70"]').click();
    cy.url().should('include', 'accounts');
  });

  it('should look for the sign in button', () => {
    cy.get('[title="Google apps"]').click();
  }); // it('should look for Im Feeling Lucky button and click', () => {
  //   cy.get('[data-ved="0ahUKEwjRwN7XyLvnAhWjSt8KHTQwDiMQ19QECA0"]').click();
  // });
});
