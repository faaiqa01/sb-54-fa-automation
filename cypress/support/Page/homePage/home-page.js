class homePage {

    async visitwebsite() {
        cy.visit('http://kasirdemo.belajarqa.com')
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/login')
    }
    async visitwebsitelogin() {
        cy.visit('http://kasirdemo.belajarqa.com/login')
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/login')
    }
    async visitwebsitregister() {
        cy.visit('http://kasirdemo.belajarqa.com/register')
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/register')
    }
    async visitwebsitegithub() {
        cy.get('a[href="https://github.com/ajikamaludin/"]').click()
    }
    async visitdashboard() {
        cy.visit('https://kasirdemo.belajarqa.com/dashboard').click()
        cy.url().should('eq', 'https://kasirdemo.belajarqa.com/dashboard')
    }

}

module.exports = new homePage()