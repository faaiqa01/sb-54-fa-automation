const locator = require('../../locators/pelanggan-page-locators')

class pelangganPage {

    // cari 
    async caripelanggan(randomUser3) {
        cy.get(locator.dataid.pelanggan_cari).type(randomUser3).type('{enter}');
        cy.wait(1000)
    }
    // Button/klik
    async kliksimpan() {
        cy.get(locator.dataid.pelanggan_button_simpan).click()
        cy.wait(1000)
    }
    async klikbuttonaksi() {
        cy.get(locator.dataid.pelanggan_area_aksi).find(locator.dataid.pelanggan_button_aksi).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonhapus() {
        cy.get(locator.dataid.pelanggan_area_haup).find(locator.dataid.pelanggan_button_hapus).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonkonfirmasihapus() {
        cy.get(locator.dataid.pelanggan_button_konfirmasi).click({force:true})
        cy.wait(1000)
    }
    async klikbuttonubah() {
        cy.get(locator.dataid.pelanggan_button_ubah).first().click({force:true})
        cy.wait(1000)
    }
    async klikmenupelanggan() {
        cy.get(locator.dataid.pelanggan_button_menu).first().click()
        cy.wait(500)
    }
    async tambahpelanggan() {
        cy.get(locator.dataid.pelanggan_button_tambah).click()
        cy.wait(500)
    }
    // Input text
    async inputnama(randomUser3) {
        cy.xpath(locator.dataid.pelanggan_nama).clear().type(randomUser3)
        cy.wait(500)
    }
    async inputnohp() {
        cy.xpath(locator.dataid.pelanggan_nohp).clear().type("087812345679")
        cy.wait(500)
    }
    async inputalamat() {
        cy.xpath(locator.dataid.pelanggan_alamat).clear().type("jl. bunga")
        cy.wait(500)
    }
    async inputketerangan() {
        cy.xpath(locator.dataid.pelanggan_keterangan).clear().type("ini keterangan")
        cy.wait(500)
    }
    // halaman pelanggan
    async urlpelanggan() {
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/customers')
        cy.wait(500)
    }
    // alert
    async alertname() {
        cy.get(locator.dataid.pelanggan_alert).should('have.text', '"name" is not allowed to be empty')
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

module.exports = new pelangganPage();