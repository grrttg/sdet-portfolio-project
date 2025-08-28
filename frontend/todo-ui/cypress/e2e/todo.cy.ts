describe('To-Do App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should successfully add a to-do item (happy path)', () => {
    const todoText = 'Learn Cypress';
    cy.get('input[type="text"]').type(todoText);
    cy.contains('Add').click();
    cy.contains(todoText).should('be.visible');
  });

  it('should not add an empty to-do item (sad path)', () => {
    cy.contains('Add').click();
    cy.get('li').should('not.exist');
  });
});
