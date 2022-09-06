/// <reference types="cypress" />
const experienciaPage = require('../../support/Experiencia/experiencia-pages')

describe('Funcionalidade: Adicionar esperiencia', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-experiencia')
    });

    it('Deve adicionar uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2020', '31/12/2021', 'ViaHub Tec')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve adicionar uma experiencia Atual com sucesso', () => {
        experienciaPage.addExperienciaAtual('QA', 'Via', 'SP', '01/01/2020', 'ViaHub Tec')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve Excluir uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2020', '31/12/2021', 'ViaHub Tec')
        cy.get('[data-test="experience-delete"]').first().click()
        cy.contains('Experiência Removida').should('be.visible')
    });
});