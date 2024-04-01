const locator = require('../../locators/produk-page-locators')
const loginlocator = require('../../locators/login-page-locators')
const logoutlocator = require('../../locators/logout-page-locators')

class produkPage {

    // cari 
    async cariproduk(randomUser3) {
        cy.get(locator.dataid.produk_cari).type(randomUser3).type('{enter}');
        cy.wait(1000)
    }
    // Button/klik
    async kliksimpan() {
        cy.get(locator.dataid.produk_button_simpan).click()
        cy.wait(1000)
    }
    async klikbuttonaksi() {
        cy.get(locator.dataid.produk_area_aksi).find(locator.dataid.produk_button_aksi).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonhapus() {
        cy.get(locator.dataid.produk_area_haup).find(locator.dataid.produk_button_hapus).first().click({force:true})
        cy.wait(1000)
    }
    async klikbuttonkonfirmasihapus() {
        cy.get(locator.dataid.produk_button_konfirmasi).click({force:true})
        cy.wait(1000)
    }
    async klikbuttonubah() {
        cy.get(locator.dataid.produk_button_ubah).first().click({force:true})
        cy.wait(1000)
    }
    async klikmenuproduk() {
        cy.get(locator.dataid.produk_button_menu).first().click()
        cy.wait(500)
    }
    async tambahproduk() {
        cy.get(locator.dataid.produk_button_tambah).click()
        cy.wait(500)
    }
    // Input text
    async inputnama(randomUser3) {
        cy.xpath(locator.dataid.produk_nama).clear().type(randomUser3)
        cy.wait(500)
    }
    async inputdeskripsi() {
        cy.xpath(locator.dataid.produk_deskripsi).clear().type("ini hanya deskripsi")
        cy.wait(500)
    }
    async inputhargabeli() {
        cy.xpath(locator.dataid.produk_harga_beli).clear().type("500000")
        cy.wait(500)
    }
    async inputhargajual() {
        cy.xpath(locator.dataid.produk_harga_jual).clear().type("1000000")
        cy.wait(500)
    }
    async inputhargabelihuruf() {
        cy.xpath(locator.dataid.produk_harga_beli).type("aaa").should('have.value','')
        cy.wait(500)
    }
    async inputhargajualhuruf() {
        cy.xpath(locator.dataid.produk_harga_jual).type("aaa").should('have.value','')
        cy.wait(500)
    }
    async inputstock() {
        cy.xpath(locator.dataid.produk_stok).clear().type("5")
        cy.wait(500)
    }
    async inputkategori() {
        cy.xpath(locator.dataid.produk_kategori).click()
        cy.get(locator.dataid.produk_kategori_nama).contains('kategori 1').click()
        cy.wait(500)
    }
    async hapushargabeli() {
        cy.xpath(locator.dataid.produk_harga_beli).clear()
        cy.wait(500)
    }
    async hapusstock() {
        cy.xpath(locator.dataid.produk_stok).clear()
        cy.wait(500)
    }
    async hapushargajual() {
        cy.xpath(locator.dataid.produk_harga_jual).clear()
        cy.wait(500)
    }
    async hapuskategori() {
        cy.xpath(locator.dataid.produk_kategori).clear({force:true})
        cy.get('.chakra-modal__close-btn').click()
        cy.wait(500)
    }
    async inputpassword() {
        cy.xpath(locator.dataid.produk_password).clear().type("1234")
        cy.wait(500)
    }
    // update user 
    async inputnamaupdate() {
        cy.xpath(locator.dataid.produk_nama).clear().type("updatenama")
        cy.wait(500)
    }
    async inputemailupdate() {
        cy.xpath(locator.dataid.produk_email).clear().type("updateuser@example.com")
        cy.wait(500)
    }
    async inputpasswordupdate() {
        cy.xpath(locator.dataid.produk_password).clear().type("akun000")
        cy.wait(500)
    }
    // halaman produk
    async urlproduk() {
        cy.url().should('eq', 'http://kasirdemo.belajarqa.com/products')
        cy.wait(500)
    }
    // alert
    async alertname() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"name" is not allowed to be empty')
    }
    async alerthargabeli() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"cost" must be a number')
    }
    async alerthargajual() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"price" must be a number')
    }
    async alertstock() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"stock" must be a number')
    }
    async alertkategori() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"category_id" is required')
    }
    async alertemailnotvalid() {
        cy.get(locator.dataid.produk_alert).should('have.text', '"email" must be a valid email')
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
    
    async alertemailsama() {
       cy.log('Alert Tidak Ada')
    }

    // login user 
    async useremaillogin(randomUser) {
        cy.xpath(loginlocator.dataid.login_email)
            .type(randomUser, { force: true })
            .should('have.value', randomUser);
    }
    async userpasswordlogin() {
        cy.xpath(loginlocator.dataid.login_password)
            .type('1234', { force: true })
            .should('have.value', '1234');
    }
    async klikLogin() {
        cy.xpath(loginlocator.dataid.login_button_masuk)
            .click()
            cy.wait(5000)
    }
    // user login setelah update
    async useremailupdate() {
        cy.xpath(loginlocator.dataid.login_email)
            .type("updateuser@example.com", { force: true })
            .should('have.value', 'updateuser@example.com');
    }
    async userpasswordupdate() {
        cy.xpath(loginlocator.dataid.login_password)
            .type('akun000', { force: true })
            .should('have.value', 'akun000');
    }
    // logout profile
    async logoutprofilenama() {
        cy.get(logoutlocator.dataid.logout_button_kasir).click({force:true})
        cy.wait(1000)
        cy.get(logoutlocator.dataid.logout_nama_profile).eq(1).should('have.text', 'updatenama')
    }
    async logoutemailupdate() {
        cy.get(logoutlocator.dataid.logout_button_kasir).click({force:true})
        cy.wait(1000)
        cy.get(logoutlocator.dataid.logout_nama_profile).eq(1).click({force:true})
        cy.xpath(loginlocator.dataid.login_email).should('have.value', 'updateuser@example.com')
    }
}

module.exports = new produkPage();