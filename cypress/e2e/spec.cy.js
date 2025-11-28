

describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('performs addition: 5 + 3 = 8', () => {
    cy.get('#btn-5').click();
    cy.get('#btn-add').click();
    cy.get('#btn-3').click();
    cy.get('#btn-equals').click();

    cy.get('#display').should('have.value', '8');
  });

  it('performs subtraction: 10 - 4 = 6', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-0').click();
    cy.get('#btn-subtract').click();
    cy.get('#btn-4').click();
    cy.get('#btn-equals').click();

    cy.get('#display').should('have.value', '6');
  });

  it('performs multiplication: 6 * 7 = 42', () => {
    cy.get('#btn-6').click();
    cy.get('#btn-multiply').click();
    cy.get('#btn-7').click();
    cy.get('#btn-equals').click();

    cy.get('#display').should('have.value', '42');
  });

  it('performs division: 15 / 3 = 5', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-5').click();
    cy.get('#btn-divide').click();
    cy.get('#btn-3').click();
    cy.get('#btn-equals').click();

    cy.get('#display').should('have.value', '5');
  });
});
