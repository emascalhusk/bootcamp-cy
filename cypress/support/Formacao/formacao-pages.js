class ExperienciaPage {

    get #escola() { return cy.get('[data-test="education-school"]') }
    get #grau() { return cy.get('[data-test="education-degree"]') }
    get #curso() { return cy.get('[data-test="education-fieldOfStudy"]') }
    get #dataInicio() { return cy.get('#from') }
    get #cursando() { return cy.get('.jss5') }
    get #dataFim() { return cy.get('#to') }
    get #descricao() { return cy.get('[rows="1"]') }
    get #btnAdd() { return cy.get('[data-test="education-submit"]') }

    addFormacao(escola, grau, curso, dataInicio, dataFim, descricao) {
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addFormacaoCursando(escola, grau, curso, dataInicio, descricao) {
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#dataInicio.type(dataInicio)
        this.#cursando.click()
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

}

module.exports = new ExperienciaPage()