const locator = require('../../locators/logout-page-locators')

class logoutPage {
    async keluarakun() {
        cy.get(locator.dataid.logout_button).click()
        cy.wait(1500)
        cy.get(locator.dataid.logout_modal).find(locator.dataid.logout_account).wait(2000).click({force:true})
        cy.wait(2000)
    }

}

module.exports = new logoutPage();