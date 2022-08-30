class ExperienciaPage {

    get #posicao() { return cy.get('[data-test="experience-title"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #empresa() { return cy.get('[data-test="experience-company"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #local() { return cy.get('[data-test="experience-location"] > .MuiInputBase-root > .MuiInputBase-input') }
    get #dataInicio() { return cy.get('#from') }
    get #checkAtual() { return cy.get('.jss5') }
    get #dataFim() { return cy.get('#to') }
    get #descricao() { return cy.get('[rows="1"]') }
    get #btnAdd() { return cy.get('[data-test="experience-submit"]') }

    addExperiencia(posicao, empresa, local, dataInicio, dataFim, descricao) {
        this.#posicao.type(posicao, { delay: 500 })
        this.#empresa.type(empresa, { delay: 500 })
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addExperienciaAtual(posicao, empresa, local, dataInicio, descricao) {
        this.#posicao.type(posicao, { delay: 500 })
        this.#empresa.type(empresa, { delay: 500 })
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#checkAtual.click()
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

}

module.exports = new ExperienciaPage()