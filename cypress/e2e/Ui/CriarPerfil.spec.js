/// <reference types="cypress" />
const faker = require('faker-br')

describe('US0003 - Funcionalidade: Criar Perfil', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.login('everton@oneemask.com', 'Senha1234')
        cy.visit('criar-perfil')
        cy.wait(500)
    });

   // beforeEach(() => {
   //     cy.visit('criar-perfil')
   // });

    it('Criar Perfil com sucesso', () => {        
        cy.get('#mui-component-select-status').click().get('[data-test="status-2"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input')
            .type(faker.address.streetName())
            .type(', nº')
            .type(faker.random.number())
            .type(', ')
            .type(faker.address.city())
            .type(', ')
            .type(faker.address.stateAbbr())
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.words())
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-bio"]').type(faker.lorem.paragraph())
        cy.get('[data-test="profile-socials"]').click()
        cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type('http://twitter.com/').type(faker.internet.userName())
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.facebook.com/').type(faker.internet.userName())
        cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.youtube.com/c/').type(faker.internet.userName())
        cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.linkedin.com/in/').type(faker.internet.userName())
        cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.instagram.com/').type(faker.internet.userName())
        cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type('http://medium.com/@').type(faker.internet.userName())
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')        
    });

    it('Validar campos obrigatórios', () => {
        cy.get('[data-test="profile-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain', 'obrigatório')
    });

    it.only('Validar dados inválidos', () => {
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-socials"]').click().click()
        cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.userName())
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="profile-webSite"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-twitter"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-facebook"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-youtube"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-linkedin"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-instagram"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
        cy.get('[data-test="profile-medium"] > .MuiFormHelperText-root').should('contain', 'Digite uma url válida')
    });
});