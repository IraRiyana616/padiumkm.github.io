import { useState } from 'react';

const List = () => {
  const [showTextArray, setShowTextArray] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updatedShowTextArray = [...showTextArray];
    updatedShowTextArray[index] = !updatedShowTextArray[index];
    setShowTextArray(updatedShowTextArray);
  };

  return (
    <div>
      <div className="container-layout py-4 px-10 mt-8">
        <div className="border-[1px] rounded-2xl divide-y-[1px]">
          {/* Item 1 */}
          <div className="p-6 space-y-6 cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">
                Apa itu PaDi UMKM?
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick(0)}>
                <path
                  d={
                    showTextArray[0]
                      ? 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                      : 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                  }></path>
              </svg>
            </div>
            {showTextArray[0] && (
              <div className="text-custom-14 text-tertiary60">
                PaDi UMKM adalah platform marketplace B2B yang menghubungkan
                UMKM lokal dengan BUMN, instansi pemerintah, dan perusahaan
                swasta untuk memfasilitasi pengadaan barang dan jasa, dengan
                fokus pada keberlanjutan dan ekonomi hijau. Pengadaan Barang dan
                Jasa BUMN memang menjadi salah satu fokus penting untuk
                mengoptimalkan dan juga mendorong kinerja BUMN sebagai salah
                satu tonggak ekonomi terpenting di Indonesia. Selain itu,
                Indonesia juga memiliki banyak sekali pengusaha kelas kecil dan
                menengah atau yang biasa kita kenal dengan istilah UMKM (Usaha
                Mikro, Kecil dan Menengah). Terkadang mereka belum memiliki
                akses pasar yang luas, sehingga kinerja UMKM terhitung belum
                optimal. UMKM sendiri juga memegang peranan penting dalam roda
                ekonomi Indonesia. Oleh karenanya, kedua faktor ini menjadi
                titik temu mengapa UMKM dan BUMN bisa berkolaborasi untuk
                memajukan ekonomi Indonesia.
                <p className="mt-5">
                  Ide brilian yang muncul untuk sebuah platform digital tersebut
                  ditandai dengan lahirnya Pasar Digital UMKM yang bertugas
                  menyediakan berbagai macam kebutuhan pengadaan barang dan jasa
                  pemerintah khususnya BUMN. Melalui PaDi UMKM inilah
                  Kementerian BUMN memberikan peluang besar dan ruang yang luas
                  kepada pelaku UMKM untuk menjadi pemasok dan vendor UMKM.
                  Selain itu, penggunaan biaya pembelanjaan barang dan jasa dari
                  masing-masing BUMN menjadi lebih terperinci dan lebih aman.
                  Hal itu dikarenakan semua proses transaksi pengadaan barang
                  dan jasa BUMN dilakukan secara online dan seluruh
                  pembiayaan/pembayaran dilakukan dengan transaksi non-tunai.
                </p>
              </div>
            )}
          </div>

          {/* Item 2 */}
          <div className="p-6 space-y-6 cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">
                Bagaimana cara UMKM mendapatkan pendanaan untuk produk ramah
                lingkungan melalui PaDi UMKM?
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick(1)}>
                <path
                  d={
                    showTextArray[1]
                      ? 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                      : 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                  }></path>
              </svg>
            </div>
            {showTextArray[1] && (
              <div className="text-custom-14 text-tertiary60">
                Padi UMKM bekerja sama dengan lembaga keuangan yang menyediakan
                skema pendanaan bagi UMKM yang ingin mengembangkan produk ramah
                lingkungan. UMKM dapat mengajukan pendanaan langsung melalui
                platform. Untuk mendapatkan pendanaan bagi produk ramah
                lingkungan, UMKM dapat mengikuti langkah-langkah berikut
                <p className="mt-1.5">
                  1. Daftar di PaDi UMKM: Pastikan UMKM Anda telah terdaftar dan
                  diverifikasi di platform PaDi UMKM
                </p>
                <p className="mt-1.5">
                  2. Akses fitur pendanaan: Masuk ke akun PaDi UMKM Anda, lalu
                  pilih opsi Pendanaan atau Pembiayaan di dashboard.
                </p>
                <p className="mt-1.5">
                  3. Pilih skema pendanaan yang sesuai: PaDi UMKM bekerja sama
                  dengan berbagai lembaga keuangan untuk menyediakan berbagai
                  opsi pembiayaan yang dirancang untuk UMKM, khususnya yang
                  <p className="ml-4"> fokus pada produk ramah lingkungan.</p>
                </p>
                <p className="mt-1.5">
                  4. Ajukan proposal pendanaan: UMKM perlu mengisi formulir
                  pengajuan dan melampirkan dokumen yang dibutuhkan, seperti
                  rencana bisnis, laporan keuangan, dan detail produk ramah
                  <p className="ml-4">lingkungan yang ingin dikembangkan.</p>
                </p>
                <p className="mt-1.5">
                  5. Proses evaluasi: Setelah proposal diajukan, lembaga
                  keuangan mitra PaDi UMKM akan mengevaluasi pengajuan
                  berdasarkan kelayakan bisnis, dampak lingkungan, serta
                  kemampuan pembayaran <p className="ml-4">UMKM.</p>
                </p>
                <p className="mt-1.5">
                  6. Dapatkan pendanaan: Jika disetujui, UMKM akan menerima
                  pendanaan sesuai dengan skema yang dipilih. Pendanaan ini bisa
                  digunakan untuk produksi, distribusi, atau pengembangan lebih
                  <p className="ml-4">lanjut dari produk ramah lingkungan.</p>
                </p>
              </div>
            )}
          </div>

          {/* Item 3 */}
          <div className="p-6 space-y-6 cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">
                Bagaimana cara mendaftar sebagai pemasok di PaDi UMKM?
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick(2)}>
                <path
                  d={
                    showTextArray[2]
                      ? 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                      : 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                  }></path>
              </svg>
            </div>
            {showTextArray[2] && (
              <div className="text-custom-14 text-tertiary60">
                Bagi pelaku UMKM yang pernah menjadi supplier pembelanjaan
                barang dan jasa BUMN, Anda bisa melihat tata cara daftar penjual
                PaDi UMKM B2B secara lengkap disini atau Anda bisa melakukan
                registrasi dengan cara berikut ini:
                <p className="mt-3">
                  1. Klik 'Daftar' dipojok kanan atas halaman utama PaDi UMKM
                  B2B
                </p>
                <p>
                  2. Isi kelengkapan data pada step 1 (Nama Perusahaan, NPWP,
                  SIUP, TDB,NIB, Jenis Kegiatan Usaha dan BUMN Pengampu),
                  kemudian klik 'BERIKUTNYA'. Pada bagian kolom BUMN Pengampu
                  dan
                  <p className="ml-4">
                    Organisasi/Himpunan, Silakan diisi sesuai dengan
                    BUMN/Organisasi pengampu perusahaan Anda. Bagi UMKM dibawah
                    naugan BUMN, Silakan diisi sesuai dengan BUMN pengampu. Bagi
                    yang berada dibawah nauangan organisasi, Silakan diisi
                    sesuai organisasi pengampu
                  </p>
                </p>
                <p>
                  3. Pada step2 , isi alamat perusahaan dan informasi
                  pembayaran, kemudian klik 'BERIKUTNYA'. (Gunakan nomor
                  rekening perusahaan, atau jika tidak ada, gunakan nomor
                  rekening direktur utama
                  <p className="ml-4">atau pemilik perusahaan Anda)</p>
                </p>
                <p>
                  4. Masukkan data Person in Chanrge (PIC) perusahan. Kemudian
                  klik 'BERIKUTNYA'. (Pastikan nomor ponsel dan email yang diisi
                  sudah benar dan aktif).
                </p>
                <p>
                  5. Upload kelengkapan dokumen dengan format JPG atau PNG
                  dengan size maksimal 1MB. Kemudian klik 'DAFTAR'. Setelah itu,
                  maka toko yang didaftarkan akan masuk ke verifikasi tim PaDi
                  <p className="ml-4">
                    UMKM. Apabila sudah diverifikasi, maka Anda akan mendapatkan
                    email (email yang sudah didaftarkan) untuk melakukan
                    aktivasi serta pembuatan password
                  </p>
                </p>
                <p>
                  6. Setelah mengirimkan permohonan registrasi, mohon tunggu
                  paling lambat 3 hari kerja untuk proses review dan verifikasi.
                  Jika belum lolos verifikasi, Silakan mendaftar kembali dan
                  pastikan{' '}
                  <p className="ml-4">
                    untuk melengkapi semua informasi, syarat dan ketentuan yang
                    berlaku. Jika berhasil terverifikasi, Anda akan mendapatkan
                    email notifikasi untuk aktivasi akun.
                  </p>
                </p>
                <p>
                  7. Segera aktivasi akun Anda, buat password baru dan Anda
                  telah bergabung dengan PaDi UMKM B2B.
                </p>
              </div>
            )}
          </div>
          {/* Item 4 */}
          <div className="p-6 space-y-6 cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">
                Apa keuntungan bergabung dengan PaDi UMKM?
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick(3)}>
                <path
                  d={
                    showTextArray[3]
                      ? 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                      : 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                  }></path>
              </svg>
            </div>
            {showTextArray[3] && (
              <div className="text-custom-14 text-tertiary60">
                Keuntungan utama bergabung dengan PaDi UMKM meliputi:
                <p className="mt-1.5">
                  1. Akses ke pasar besar: UMKM dapat menjual produk dan jasa
                  kepada BUMN, perusahaan swasta dan instansi pemerintah di
                  seluruh Indonesia, memperluas jangkauan pasar.
                </p>
                <p lassName="mt-1.5">
                  2. Fokus pada keberlanjutan: PaDi UMKM mendukung UMKM yang
                  memiliki produk ramah lingkungan, membantu mereka terhubung
                  <p className="ml-4">
                    dengan perusahaan besar yang mencari pemasok yang sesuai
                    dengan prinsip ESG (Environmental, Social, and Governance)
                  </p>
                </p>
                <p lassName="mt-1.5">
                  3. Peningkatan kredibilitas: UMKM yang terverifikasi di
                  platform PaDi UMKM diakui oleh pembeli besar seperti BUMN,
                  menambah reputasi dan kepercayaan dalam bisnis.
                </p>
              </div>
            )}
          </div>
          {/* Item 5 */}
          <div className="p-6 space-y-6 cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">
                Apakah ada biaya untuk bergabung dengan PaDi UMKM?
              </h2>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick(4)}>
                <path
                  d={
                    showTextArray[4]
                      ? 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                      : 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                  }></path>
              </svg>
            </div>
            {showTextArray[4] && (
              <div className="text-custom-14 text-tertiary60">
                Pendaftaran di PaDi UMKM untuk UMKM dan perusahaan besar gratis.
                Namun, ada biaya transaksi tertentu yang mungkin dikarenakan
                saat melakukan pengadaan melalui platform.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
