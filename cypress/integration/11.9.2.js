
describe('Pokedex 2', function() {
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur', { timeout: 45000 })
    //cy.visit('http://localhost:8081/pokemon/ivysaur')
    cy.contains('ivysaur')
  })
})