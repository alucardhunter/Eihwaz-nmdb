context('Search Action', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should type in search input and click search', () => {
    cy.get('input')
      .type('Wonder Woman').should('have.value', 'Wonder Woman')
    cy.get('button').contains('Search').click()
    cy.url().should('include', 'search?page=1&query=Wonder%20Woman')
  })

  it('Should find movie card', () => {
    cy.get('input')
      .type('Wonder Woman').should('have.value', 'Wonder Woman')
    cy.get('button').contains('Search').click()
    cy.contains('Wonder Woman 1984').click()
  })

  it('Should find movie card set as favorite and add to watch list', () => {
    cy.get('input')
      .type('Wonder Woman').should('have.value', 'Wonder Woman')
    cy.get('button').contains('Search').click()
    cy.contains('Wonder Woman 1984').click()
    cy.contains('Set as Favorite').click()
    cy.contains('Add to Watch List').click()
  })

  it('Should enter profile menu and remove favorite', () => {
    cy.get('input')
      .type('Wonder Woman').should('have.value', 'Wonder Woman')
    cy.get('button').contains('Search').click()
    cy.contains('Wonder Woman 1984').click()
    cy.contains('Set as Favorite').click()
    cy.contains('Add to Watch List').click()
    cy.contains('Profile Menu').click()
    cy.get('.Movie_Card_Fav').first().click()
  })

})