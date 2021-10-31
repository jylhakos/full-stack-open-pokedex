
describe('Pokedex 2', function() {
  it('pokemon page can be opened', function() {
    //cy.intercept('/pokemon/ivysaur').as('ivysaur')
    cy.visit('http://localhost:5000', { timeout: 45000 })
    //cy.wait('@ivysaur')
    //cy.visit('http://localhost:8081/pokemon/ivysaur')
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('ivysaur')
  })
})