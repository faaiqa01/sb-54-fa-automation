const locator = require('../../locators/kategori-page-locators')

class kategoriPage {

    // cari 
    async carikategori(randomUser3) {
        cy.get(locator.dataid.kategori_cari).type(randomUser3).type('{enter}');
        cy.wait(1000)
    }
    // Button/klik
    async kliksimpan() {
        cy.get(locator.dataid.kategori_button_simpan).click()
        cy.wait(1000)
    }
    async klikbuttonaksi() {
        cy.get(locator.dataid.kategori_area_aksi).find(locator.dataid.kategori_button_aksi).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonhapus() {
        cy.get(locator.dataid.kategori_area_haup).find(locator.dataid.kategori_button_hapus).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonkonfirmasihapus() {
        cy.get(locator.dataid.kategori_button_konfirmasi).click({force:true})
        cy.wait(1000)
    }
    async klikbuttonubah() {
        cy.get(locator.dataid.kategori_button_ubah).first().click({force:true})
        cy.wait(1000)
    }
    async klikmenukategori() {
        cy.get(locator.dataid.kategori_button_menu).first().click()
        cy.wait(500)
    }
    async tambahkategori() {
        cy.get(locator.dataid.kategori_button_tambah).click()
        cy.wait(500)
    }
    // Input text
    async inputnama(randomUser3) {
        cy.xpath(locator.dataid.kategori_nama).clear().type(randomUser3)
        cy.wait(500)
    }
    async inputdeskripsi() {
        cy.xpath(locator.dataid.kategori_deskripsi).clear().type("ini deskripsi")
        cy.wait(500)
    }
    // halaman kategori
    async urlkategori() {
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/categories')
        cy.wait(500)
    }
    // alert
    async alertname() {
        cy.get(locator.dataid.kategori_alert).should('have.text', '"name" is not allowed to be empty')
    }
    async alertsuksesudate() {
        cy.contains('success').should('be.visible')
        cy.contains('item diubah').should('be.visible')
        cy.wait(1000)
    }
    async alertsuksestambah() {
        cy.contains('success').should('be.visible')
        cy.contains('item ditambah').should('be.visible')
        cy.wait(1000)
    }
    async alertsukseshapus() {
        cy.contains('success').should('be.visible')
        cy.contains('item dihapus').should('be.visible')
        cy.wait(1000)
    }
    
}

module.exports = new kategoriPage();