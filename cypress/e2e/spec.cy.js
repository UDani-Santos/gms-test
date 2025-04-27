///<reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Daniela')
    cy.get('#signup-lastname').type('Santos')
    cy.get('#signup-email').type('dani2_santos@teste.com')
    cy.get('#signup-phone').type('11978654329')
    cy.get('#signup-password').type('Senha@1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})