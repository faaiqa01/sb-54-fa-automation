const locator = require('../../locators/login-page-locators')

class loginPage {

    async inputEmailvalid() {
        cy.xpath(locator.dataid.login_email)
            .type('abdillahfaaiq@gmail.com', { force: true })
            .should('have.value', 'abdillahfaaiq@gmail.com');
    }

    async inputEmailnotvalid() {
        cy.xpath(locator.dataid.login_email)
            .type('abdillahfaaiq@', { force: true })
            .should('have.value', 'abdillahfaaiq@');
    }

    async inputPassword() {
        cy.xpath(locator.dataid.login_password)
            .type('akun1234', { force: true })
            .should('have.value', 'akun1234');
    }

    async klikLogin() {
        cy.xpath(locator.dataid.login_button_masuk)
            .click()
            cy.wait(5000)
    }

    async klikRegister() {
        cy.get(locator.dataid.login_button_register).click()
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/register')
        cy.wait(1000)
    }

    // alert
    async alertname() {
        cy.get(locator.dataid.login_alert).should('have.text', '"name" is not allowed to be empty')
    }
    async alertemail() {
        cy.get(locator.dataid.login_alert).should('have.text', '"email" is not allowed to be empty')
    }
    async alertpassword() {
        cy.get(locator.dataid.login_alert).should('have.text', '"password" is not allowed to be empty')
    }
    async alertemailmustvalid() {
        cy.get(locator.dataid.login_alert).should('have.text', '"email" must be a valid email')
    }
    async alertemailislogined() {
        cy.get(locator.dataid.login_alert).should('have.text', '"email" to logined')
    }
    async alertpasswordwrong() {
        cy.get(locator.dataid.login_alert).should('have.text', 'Kredensial yang Anda berikan salah')
    }

}

module.exports = new loginPage();