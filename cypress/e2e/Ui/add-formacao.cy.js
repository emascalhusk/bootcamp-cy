/// <reference types="cypress" />
const experienciaPage = require('../../support/Formacao/formacao-pages')

describe('Funcionalidade: Adicionar esperiencia', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
    });

    it('Deve adicionar uma formação com sucesso', () => {
        experienciaPage.addFormacao('Escola nome teste', 'Grau teste', 'Ciências da Computação', '01/01/2020', '31/12/2021', 'Lorem ipsum dolor sit amet.')
        cy.contains('Formação Acadêmica Adicionada').should('be.visible')
    });

    it('Deve adicionar uma formação cursando com sucesso', () => {
        experienciaPage.addFormacaoCursando('Escola nome teste', 'Grau teste', 'Ciências da Computação', '01/01/2020', 'Lorem ipsum dolor sit amet.')
        cy.contains('Formação Acadêmica Adicionada').should('be.visible')
    });

    it('Deve Excluir uma formação com sucesso', () => {
        experienciaPage.addFormacao('Escola nome teste', 'Grau teste', 'Ciências da Computação', '01/01/2020', '31/12/2021', 'Lorem ipsum dolor sit amet.')
        cy.get('[data-test="education-delete"]').first().click()
        cy.contains('Formação Acadêmica Adicionada').should('be.visible')
    });
});