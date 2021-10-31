describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    //cy.visit('http://localhost:8081')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex 2', function() {
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur', { timeout: 45000 })
    //cy.visit('http://localhost:8081/pokemon/ivysaur')
    cy.contains('ivysaur')
  })
})