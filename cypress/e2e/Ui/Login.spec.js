/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('US0001 - Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.login('everton@oneemask.com', 'Senha1234')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Deve fazer login com mensagem de erro', () => {
        cy.login('everton@eoneemask.com', 'Senha12345')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });

    it('Deve fazer login com sucesso - Usando importação', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
});