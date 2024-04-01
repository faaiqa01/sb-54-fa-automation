const locator = require('../../locators/register-page-locators')

class registerPage {

    async inputToko(randomUser) {
        cy.xpath(locator.dataid.register_nama_toko)
            .type('toko 1', {force: true})
            .should('have.value', 'toko 1')
    }
    async inputEmail(randomUser) {
        cy.xpath(locator.dataid.register_nama_email)
            .type(randomUser, {force: true})
            .should('have.value', randomUser)
    }
    async inputPassword() {
        cy.xpath(locator.dataid.register_password)
            .type('password123', {force: true})
            .should('have.value', 'password123', {timeout: 2000})
    }
    async klikDaftar() {
        cy.xpath(locator.dataid.register_button_daftar)
            .click()
        
        cy.wait(1000)
    }
    async kliksudahpunyakun() {
        cy.get(locator.dataid.register_button_login).click()
        cy.get('#password, #password').should('be.visible')

    }

    // alert
        async alertname() {
            cy.get(locator.dataid.register_alert).should('have.text', '"name" is not allowed to be empty')
        }
        async alertemail() {
            cy.get(locator.dataid.register_alert).should('have.text', '"email" is not allowed to be empty')
        }
        async alertpassword() {
            cy.get(locator.dataid.register_alert).should('have.text', '"password" is not allowed to be empty')
        }
        async alertemailmustvalid() {
            cy.get(locator.dataid.register_alert).should('have.text', '"email" must be a valid email')
        }
        async alertemailisregistered() {
            cy.get(locator.dataid.register_alert).should('have.text', '"email" to registered')
        }
}

module.exports = new registerPage();