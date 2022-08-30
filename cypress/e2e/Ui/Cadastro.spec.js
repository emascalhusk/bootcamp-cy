/// <reference types="cypress" />
const faker = require('faker-br')


describe('US0002 - Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer o cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('everton2f')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Senha1234')
        cy.get('[data-test="register-password2"]').type('Senha1234')
        cy.get('[data-test="register-submit"]').click()

        // Resultado esperado
        cy.get('.large').should('contain', 'Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')
        
    });
    
});