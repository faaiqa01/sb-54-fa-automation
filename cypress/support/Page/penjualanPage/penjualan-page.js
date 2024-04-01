const locator = require('../../locators/penjualan-page-locators')
const loginlocator = require('../../locators/login-page-locators')
const logoutlocator = require('../../locators/logout-page-locators')

class penjualanPage {

    // cari 
    async caripenjualan() {
        cy.get(locator.dataid.penjualan_cari_transaksi).type("INV").type('{enter}');
        cy.wait(1000)
    }
    // memastikan data dalam tabel
    async datatabelpenjualan() {
        cy.get(locator.dataid.penjualan_tabel).should('have.length.gt', 0)
        cy.wait(1000)
    }
    async datatabelproduk() {
        cy.get(locator.dataid.penjualan_tabel_produk).should('have.length.gt', 0)
        cy.wait(1000)
    }
    // Button/klik
    async klikmenupenjualan() {
        cy.get(locator.dataid.penjualan_button_menu).first().click()
        cy.wait(500)
    }
    async tambahpenjualan() {
        cy.get(locator.dataid.penjualan_button_tambah).last().click()
        cy.wait(500)
    }
    async tambahproduk() {
        cy.get(locator.dataid.penjualan_button_produk).click()
        cy.wait(500)
    }
    async pilihproduk() {
        cy.get(locator.dataid.penjualan_list_produk).first().click()
        cy.wait(500)
    }
    async bayarpenjualan() {
        cy.get(locator.dataid.penjualan_button_bayar).click()
        cy.wait(500)
        
    }
    async closepopupbayar(){
        cy.get(locator.dataid.penjualan_button_tutup).click()
        cy.wait(500)
    }
    // Input
    async pilihdate1(yesterdayDate) {
        cy.get(locator.dataid.penjualan_date_1).eq(0).type(yesterdayDate).click()
        cy.wait(500)
    }
    async pilihdate2(currentDate) {
        cy.get(locator.dataid.penjualan_date_2).eq(1).type(currentDate).click()
        cy.wait(500)
    }
    async inputjumlahbarang() {
        cy.get(locator.dataid.penjualan_jumlah).clear().type("2")
        cy.wait(500)
    }
    async inputjumlahbayar() {
        cy.get(locator.dataid.penjualan_jumlah_bayar).clear().type("15000000")
        cy.wait(500)
    }
    async inputdiskon() {
        cy.xpath(locator.dataid.penjualan_diskon).clear().type("1500")
        cy.wait(500)
    }
    async inputcatatan() {
        cy.xpath(locator.dataid.penjualan_catatan).clear().type("ini hanya catatan")
        cy.wait(500)
    }
    // halaman penjualan
    async urlpengguna() {
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/users')
        cy.wait(500)
    }
    // alert
    async alertprodukkosong() {
        cy.get(locator.dataid.penjualan_alert).eq(1).should('have.text', 'erroritem produk kosong')
    }
}

module.exports = new penjualanPage();