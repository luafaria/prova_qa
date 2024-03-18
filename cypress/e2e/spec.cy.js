describe('Automação do Trello', () => {
  let boardId
  let cardId
  let listId
  let apiKey
  let apiToken

  before(() => {
    apiKey = Cypress.env('SUA_KEY');
    apiToken = Cypress.env('SEU_TOKEN');
  })

  it('Deve criar um novo quadro', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards?key=${apiKey}&token=${apiToken}&name=Novo%20Quadro`
    }).then((response) => {
      expect(response.status).to.eq(200)
      boardId = response.body.id
    })
  })


  it('Deve criar uma nova lista', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/lists?key=${apiKey}&token=${apiToken}&name=Nova%20Lista&idBoard=${boardId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      listId = response.body.id
    })
  })


  it('Deve criar um novo card', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}&name=Novo%20Card&idList=${listId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cardId = response.body.id
    })
  })

  
  it('Deve excluir um card', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve excluir um quadro', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})