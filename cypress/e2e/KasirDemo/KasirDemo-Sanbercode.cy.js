// Const
const loginPage = require('../../support/Page/loginPage/login-page')
const homePage = require('../../support/Page/homePage/home-page')
const registerPage = require('../../support/Page/registerPage/register-page')
const logoutPage = require('../../support/Page/logoutPage/logout-page');
const pelangganPage = require('../../support/Page/pelangganPage/pelanggan-page');
const kategoriPage = require('../../support/Page/kategoriPage/kategori-page');
const penggunaPage = require('../../support/Page/penggunaPage/pengguna-page');
const produkPage = require('../../support/Page/produkPage/produk-page');
const penjualanPage = require('../../support/Page/penjualanPage/penjualan-page');
const pembelianPage = require('../../support/Page/pembelianPage/pembelian-page');

// date hari ini
function getCurrentDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = (today.getMonth() + 1).toString().padStart(2, '0');
	const day = today.getDate().toString().padStart(2, '0');
  
	return `${year}-${month}-${day}`;
  }

  const currentDate = getCurrentDate();

// date kemarin
function getYesterdayDate() {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);
  
	const year = yesterday.getFullYear();
	const month = (yesterday.getMonth() + 1).toString().padStart(2, '0');
	const day = yesterday.getDate().toString().padStart(2, '0');
  
	return `${year}-${month}-${day}`;
  }
  const yesterdayDate = getYesterdayDate();

// email valid
var randomUser = generateRandomUser();

function generateRandomUser(){
	const time = new Date().getTime()
	return "usser"+time+"@example.com";
}

// email not valid
var randomUser2 = generateRandomUser2();

function generateRandomUser2(){
	const time = new Date().getTime()
	return "usser"+time+"@";
}

// Nama Pelanggan
var randomUser3 = generateRandomUser3();

function generateRandomUser3(){
	const time = new Date().getTime()
	return "pelanggan"+time;
}

describe('Test Case Register', () => {
	it('Daftar akun yang benar', () => {

	  homePage.visitwebsite()
	  loginPage.klikRegister()
	  registerPage.inputToko()
	  registerPage.inputEmail(randomUser)
	  registerPage.inputPassword()
	  registerPage.klikDaftar()

	})

	it('Daftar dengan email yang sama', () => {
			homePage.visitwebsite()
			loginPage.klikRegister()
			registerPage.inputToko()
			registerPage.inputEmail(randomUser)
			registerPage.inputPassword()
			//registerPage.klikDaftar()
			registerPage.alertemailisregistered()
	})

	it('Daftar tanpa input nama toko', () => {

		homePage.visitwebsite()
		loginPage.klikRegister()
		
		registerPage.inputEmail(randomUser)
		registerPage.inputPassword()
		registerPage.klikDaftar()
		registerPage.alertname()
  
	})

	it('Daftar tanpa input email', () => {

		homePage.visitwebsite()
		loginPage.klikRegister()
		registerPage.inputToko()
		// not input email
		registerPage.inputPassword()
		registerPage.klikDaftar()
		registerPage.alertemail()
  
	})

	it('Daftar tanpa input password', () => {

		homePage.visitwebsite()
			loginPage.klikRegister()
			registerPage.inputToko()
			registerPage.inputEmail(randomUser)
			// not input password
			registerPage.klikDaftar()
			registerPage.alertpassword()
  
	})

	it('input field email dengan format yang salah', () => {

	  homePage.visitwebsite()
	  loginPage.klikRegister()
	  registerPage.inputToko()
	  registerPage.inputEmail(randomUser2)
	  registerPage.inputPassword()
	  registerPage.klikDaftar()
	  registerPage.alertemailmustvalid()

	})

	it('Klik link button login', () => {
	  homePage.visitwebsite()
	  loginPage.klikRegister()
	  registerPage.kliksudahpunyakun()

	})

	it('Mengunjungi halaman register', () => {
	  homePage.visitwebsite()
	  loginPage.klikRegister()
	})

	it('Klik link github kasirajadev', () => {
	  homePage.visitwebsite()
	  loginPage.klikRegister()
	  homePage.visitwebsitegithub()


	})

})

describe('Test Case Login', () => {
	it('login akun yang benar', () => {
		homePage.visitwebsite()
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		logoutPage.keluarakun()
	})

	it('login hanya dengan input email', () => {
		homePage.visitwebsite()
		loginPage.inputEmailvalid()
		// loginPage.inputPassword()
		loginPage.klikLogin()
		loginPage.alertpassword()
	})

	it('login hanya dengan input password', () => {
		homePage.visitwebsite()
		// loginPage.inputEmail()
		loginPage.inputPassword()
		loginPage.klikLogin()
		loginPage.alertemail()

	})

	it('input field email dengan format yang salah', () => {
		homePage.visitwebsite()
		loginPage.inputEmailnotvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		loginPage.alertemailmustvalid()

	})

	it('Klik link daftar akun', () => {
		homePage.visitwebsite()
		loginPage.klikRegister()
	})

	it('Mengunjungi halaman login', () => {
		homePage.visitwebsite()
	})

	it('Klik link github kasirajadev', () => {
		homePage.visitwebsite()
		homePage.visitwebsitegithub()
	})

	it('Login dengan password invalid', () => {
		homePage.visitwebsite()
		loginPage.inputEmailvalid()
		cy.get('#password').type("12345")
		loginPage.klikLogin()
		loginPage.alertpasswordwrong()
	})





})

describe('Test Case Pelanggan', () => {
	it('Menampilkan halaman pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.urlpelanggan()
		
	})
	it('Mengosongkan data nama pada pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.klikmenupelanggan()
		pelangganPage.tambahpelanggan()
		pelangganPage.kliksimpan()
		pelangganPage.alertname()
	
	})
	it('Menambahkan Pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.tambahpelanggan()
		pelangganPage.inputnama(randomUser3)
		pelangganPage.inputnohp()
		pelangganPage.inputalamat()
		pelangganPage.inputketerangan()
		pelangganPage.kliksimpan()
		pelangganPage.alertsuksestambah()
		
	})
	it('Pencarian data pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.caripelanggan(randomUser3)
		
	})
	it('Mengedit data pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.klikbuttonaksi()
		pelangganPage.klikbuttonubah()
		pelangganPage.inputnohp()
		pelangganPage.inputalamat()
		pelangganPage.inputketerangan()
		pelangganPage.kliksimpan()
		pelangganPage.alertsuksesudate()

	})
	it('Menghapus data pelanggan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pelangganPage.klikmenupelanggan()
		pelangganPage.klikbuttonaksi()
		pelangganPage.klikbuttonhapus()
		pelangganPage.klikbuttonkonfirmasihapus()
		pelangganPage.alertsukseshapus()
	
	})

})

describe('Test Case Kategori', () => {
	it('Menampilkan halaman Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.urlkategori()
		
	})
	it('Mengosongkan data nama pada Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.klikmenukategori()
		kategoriPage.tambahkategori()
		kategoriPage.kliksimpan()
		kategoriPage.alertname()
	
	})
	it('Menambahkan Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.tambahkategori()
		kategoriPage.inputnama(randomUser3)
		kategoriPage.inputdeskripsi()
		kategoriPage.kliksimpan()
		kategoriPage.alertsuksestambah()
		
	})
	it('Pencarian data Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.carikategori(randomUser3)
		
	})
	it('Mengedit data Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.klikbuttonaksi()
		kategoriPage.klikbuttonubah()
		kategoriPage.inputnama(randomUser3)
		kategoriPage.inputdeskripsi()
		kategoriPage.kliksimpan()
		kategoriPage.alertsuksesudate()

	})
	it('Menghapus data Kategori', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		kategoriPage.klikmenukategori()
		kategoriPage.klikbuttonaksi()
		kategoriPage.klikbuttonhapus()
		kategoriPage.klikbuttonkonfirmasihapus()
		kategoriPage.alertsukseshapus()
	
	})
})

describe('Test Case Pengguna', () => {
	it('Menampilkan halaman pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.urlpengguna()
		
	})
	it('Mengosongkan data nama pada pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.kliksimpan()
		penggunaPage.alertname()
	
	})
	it('Mengosongkan data email pada pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.inputpassword()
		penggunaPage.kliksimpan()
		penggunaPage.alertemail()
	
	})
	it('Mengosongkan data password pada pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.inputemail(randomUser)
		penggunaPage.kliksimpan()
		penggunaPage.alertpassword()
	
	})
	it('input field email dengan format yang salah', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.inputemail(randomUser2)
		penggunaPage.kliksimpan()
		penggunaPage.alertemailnotvalid()
	
	})
	it('Menambahkan pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.inputemail(randomUser)
		penggunaPage.inputpassword()
		penggunaPage.kliksimpan()
		penggunaPage.alertsuksestambah()
		
	})
	it('Tambah akun dengan email yang sama', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.tambahpengguna()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.inputemail(randomUser)
		penggunaPage.inputpassword()
		penggunaPage.kliksimpan()
		penggunaPage.alertemailsama()
		
	})
	it('Pencarian data pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.caripengguna(randomUser3)
	})
	it('delete akun yang sama dulu tadi', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonaksi()
		penggunaPage.klikbuttonhapus()
		penggunaPage.klikbuttonkonfirmasihapus()
		penggunaPage.alertsukseshapus()
	})
	it('Login dengan profile baru', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonubah()
		penggunaPage.inputnamaupdate()
		penggunaPage.kliksimpan()
		penggunaPage.alertsuksesudate()
		logoutPage.keluarakun()
		// login 
		penggunaPage.useremaillogin(randomUser)
		penggunaPage.userpasswordlogin()
		loginPage.klikLogin()
		penggunaPage.logoutprofilenama()
		//------------------//

	})
	it('Login dengan email baru', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonubah()
		penggunaPage.inputemailupdate()
		penggunaPage.kliksimpan()
		penggunaPage.alertsuksesudate()
		logoutPage.keluarakun()
		// login 
		penggunaPage.useremailupdate()
		penggunaPage.userpasswordlogin()
		loginPage.klikLogin()
		penggunaPage.logoutemailupdate()
		//------------------//

	})
	it('Login dengan password baru', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonubah()
		penggunaPage.inputpasswordupdate()
		penggunaPage.kliksimpan()
		penggunaPage.alertsuksesudate()
		logoutPage.keluarakun()
		// login 
		penggunaPage.useremailupdate()
		penggunaPage.userpasswordupdate()
		loginPage.klikLogin()
		//------------------//

	})
	it('Login dengan email dan password yang baru', () => {
		homePage.visitwebsite()
		// login 
		penggunaPage.useremaillogin(randomUser)
		penggunaPage.userpasswordlogin()
		loginPage.klikLogin()
	})
	it('Mengedit data pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonaksi()
		penggunaPage.klikbuttonubah()
		penggunaPage.inputnama(randomUser3)
		penggunaPage.kliksimpan()
		penggunaPage.alertsuksesudate()

	})
	it('Menghapus data pengguna', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penggunaPage.klikmenupengguna()
		penggunaPage.klikbuttonaksi()
		penggunaPage.klikbuttonhapus()
		penggunaPage.klikbuttonkonfirmasihapus()
		penggunaPage.alertsukseshapus()
	
	})
	
})

describe('Test Case Produk', () => {
	it('Menampilkan halaman produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.urlproduk()
		
	})
	it('Mengosongkan data nama pada produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.kliksimpan()
		produkPage.alertname()
	
	})
	it('Mengosongkan data harga beli pada produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputnama(randomUser3)
		produkPage.inputdeskripsi()
		produkPage.hapushargabeli()
		produkPage.kliksimpan()
		produkPage.alerthargabeli()
	
	})
	it('Mengosongkan data harga jual pada produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputnama(randomUser3)
		produkPage.inputdeskripsi()
		produkPage.inputhargabeli()
		produkPage.hapushargajual()
		produkPage.kliksimpan()
		produkPage.alerthargajual()
	
	})
	it('Mengosongkan data stok pada produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputnama(randomUser3)
		produkPage.inputdeskripsi()
		produkPage.inputhargabeli()
		produkPage.inputhargajual()
		produkPage.hapusstock()
		produkPage.kliksimpan()
		produkPage.alertstock()
	
	})
	it('Mengosongkan data kategori pada produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputnama(randomUser3)
		produkPage.inputdeskripsi()
		produkPage.inputhargabeli()
		produkPage.inputhargajual()
		produkPage.inputstock()
		produkPage.hapuskategori()
		produkPage.kliksimpan()
		produkPage.alertkategori()
	
	})
	it('Menginput huruf pada harga jual dan beli', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputhargabelihuruf()
		produkPage.inputhargajualhuruf()
	})
	it('Menambahkan produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.tambahproduk()
		produkPage.inputnama(randomUser3)
		produkPage.inputdeskripsi()
		produkPage.inputhargabeli()
		produkPage.inputhargajual()
		produkPage.inputstock()
		produkPage.inputkategori()
		produkPage.kliksimpan()
		produkPage.alertsuksestambah()
		
	})
	it('Pencarian data produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.cariproduk(randomUser3)
	})
	it('Mengedit data produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.klikbuttonaksi()
		produkPage.klikbuttonubah()
		produkPage.inputnama(randomUser3)
		produkPage.kliksimpan()
		produkPage.alertsuksesudate()

	})
	it('Menghapus data produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		produkPage.klikmenuproduk()
		produkPage.klikbuttonaksi()
		produkPage.klikbuttonhapus()
		produkPage.klikbuttonkonfirmasihapus()
		produkPage.alertsukseshapus()
	
	})
})

describe('Test Case Penjualan', () => {
	it('Menambahkan Penjualan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penjualanPage.klikmenupenjualan()
		penjualanPage.tambahpenjualan()
		penjualanPage.tambahproduk()
		penjualanPage.pilihproduk()
		penjualanPage.datatabelproduk()
		penjualanPage.inputjumlahbarang()
		penjualanPage.inputjumlahbayar()
		penjualanPage.bayarpenjualan()
		penjualanPage.closepopupbayar()
		penjualanPage.klikmenupenjualan()
		penjualanPage.datatabelpenjualan()
	})
	it('Melihat data penjualan di tanggal sebelumnya', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penjualanPage.klikmenupenjualan()
		penjualanPage.pilihdate1(yesterdayDate) // tanggal kemarin
		penjualanPage.pilihdate2(currentDate) // tanggal hari ini
		penjualanPage.datatabelpenjualan()
	})
	it('Bayar penjualan tanpa menambahkan produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penjualanPage.klikmenupenjualan()
		penjualanPage.tambahpenjualan()
		cy.wait(5000)
		penjualanPage.inputjumlahbayar()
		penjualanPage.bayarpenjualan()
		penjualanPage.alertprodukkosong()
	})
	it('Pencarian transaksi penjualan', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		penjualanPage.klikmenupenjualan()
		penjualanPage.caripenjualan()
		penjualanPage.datatabelpenjualan()
	})
})

describe('Test Case pembelian', () => {
	it('Menambahkan pembelian', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pembelianPage.klikmenupembelian()
		pembelianPage.tambahpembelian()
		pembelianPage.tambahproduk()
		pembelianPage.pilihproduk()
		pembelianPage.datatabelproduk()
		pembelianPage.inputjumlahbarang()
		pembelianPage.klikbuttonsimpan()
		pembelianPage.klikmenupembelian()
		pembelianPage.datatabelpembelian()
	})
	it('Melihat data pembelian di tanggal sebelumnya', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pembelianPage.klikmenupembelian()
		pembelianPage.pilihdate1(yesterdayDate) // tanggal kemarin
		pembelianPage.pilihdate2(currentDate) // tanggal hari ini
		pembelianPage.datatabelpembelian()
	})
	it('Bayar pembelian tanpa menambahkan produk', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pembelianPage.klikmenupembelian()
		pembelianPage.tambahpembelian()
		cy.wait(5000)
		pembelianPage.klikbuttonsimpan()
		pembelianPage.alertprodukkosong()
	})
	it('Pencarian transaksi pembelian', () => {
		homePage.visitwebsite()
		// login 
		loginPage.inputEmailvalid()
		loginPage.inputPassword()
		loginPage.klikLogin()
		//------------------//
		pembelianPage.klikmenupembelian()
		pembelianPage.caripembelian()
		pembelianPage.datatabelpembelian()
	})
})
