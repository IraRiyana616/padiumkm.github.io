import React from 'react';
import facebook from '/src/assets/icons/facebook.svg';
import twitter from '/src/assets/icons/twitter.svg';
import instagram from '/src/assets/icons/instagram.svg';
import youtube from '/src/assets/icons/youtube.svg';
import email from '/src/assets/icons/sms.svg';
import whatsapp from '/src/assets/icons/whatsapp.svg';
import mandiri from '/src/assets/icons/mandiri.svg';
import bni from '/src/assets/icons/bni.svg';
import bsi from '/src/assets/icons/bsi.svg';
import bca from '/src/assets/icons/bca.svg';
import btn from '/src/assets/icons/btn.svg';
import bjb from '/src/assets/icons/bjb.svg';
import dana from '/src/assets/icons/dana.svg';
import ovo from '/src/assets/icons/ovo.svg';
import linkaja from '/src/assets/icons/link-aja.svg';
import credit from '/src/assets/icons/credit-card.svg';
import kri from '/src/assets/icons/kki.svg';
import pospay from '/src/assets/icons/pos.svg';
import googleplay from '/src/assets/icons/google-play.svg';
import applestore from '/src/assets/icons/apple-store.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-12 flex-col items-center">
      <div className="text-center xl:flex xl:text-left py-10 px-5 ">
        <div className="flex flex-col space-y-6 text-center md:space-y-0 md:text-left md:flex-row xl:pr-[100px] xl:space-y-0 xl:text-left">
          <div className="w-full flex flex-col space-y-5 px-12 text-center xl:text-left xl:w-fit">
            <div className="text-xl font-bold font-nunito ">Informasi</div>
            <div className="space-y-3 whitespace-nowrap">
              <div className="cursor-pointer text-sm">Tentang Kami</div>
              <a href="#">
                <div className="cursor-pointer text-sm">Syarat & Ketentuan</div>
              </a>
              <a href="#">
                <div className="cursor-pointer text-sm">Kebijakan Privasi</div>
              </a>
              <a href="#">
                <div className="cursor-pointer text-sm">Finance</div>
              </a>
              <a href="#">
                <div className="cursor-pointer text-sm">FAQ</div>
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-5 px-20 text-center xl:text-left xl:w-fit">
            <div className="text-xl font-bold font-nunito">Penjual</div>
            <div className="space-y-0 whitespace-nowrap">
              <div className="text-sm cursor-pointer">Panduan Penjual</div>
              <div className="text-sm cursor-pointer">Informasi Tender</div>
              <div className="text-sm cursor-pointer">Control Tower</div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-5 px-20 text-center xl:text-left xl:w-fit">
            <div className="text-xl font-bold font-nunito">Pembeli</div>
            <div className="space-y-0 whitespace-nowrap">
              <div className="text-sm cursor-pointer">Panduan Pembeli</div>
              <div className="text-sm cursor-pointer">Metode Pembelian</div>
              <div className="text-sm cursor-pointer">Tender Kilat</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-5 px-15 text-center xl:text-left xl:w-fit">
          <div className="text-xl font-bold font-nunito">Hubungi Kami</div>
          <div className="text-sm cursor-pointer">
            Gedung Telkom Divisi Digital Business & Technology
            <br />
            Jl. Prof. Dr. Soepomo No.139, RT.13/RW.2, Tebet Barat,
            <br />
            Jakarta Selatan, Jakarta 12810, Indonesia
            <br />
            Senin - Jumat | 08:00 - 17:00 WIB
            <div className="flex items-center space-x-3 mt-4 mb-0 justify-center xl:justify-start">
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.facebook.com/PadiUMKM/"
                  rel="noreferrer noopener"
                  target="_blank">
                  <img alt="Facebook" width={24} height={24} src={facebook} />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.twitter.com/PadiUMKM/"
                  rel="noreferrer noopener"
                  target="_blank">
                  <img alt="X" width={24} height={24} src={twitter} />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.instagram.com/PadiUMKM/"
                  rel="noreferrer noopener"
                  target="_blank">
                  <img alt="Instagram" width={24} height={24} src={instagram} />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.youtube.com/@PaDiUMKM"
                  rel="noreferrer noopener"
                  target="_blank">
                  <img alt="Youtube" width={24} height={24} src={youtube} />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold">
              Layanan Pengaduan Konsumen
            </div>
            <div className="text-sm font-semibold">PaDi UMKM</div>
            <div className="flex fivide-x-[1px] divide-palletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center space-x-1 text-sm">
                <img alt="email" width={24} height={24} src={email} />
                <div className="text-sm">cs@padiumkm.id</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
              Kementrian Perdagangan RI
            </div>
          </div>
          <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
            <div className="flex items-center pr-4 text-sm">
              <img alt="whatsapp" height={24} width={24} src={whatsapp} />
              <div className="pl-1">+62 853 1111 1010</div>
            </div>
            <div>|</div>
            <div className="flex items-center pl-4 space-x-1 text-sm">
              <img alt="email" height={24} width={24} src={email} />
              <div className="text-sm">contact.us@kemendag.go.id</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 px-12 font-bold text-custom-24">
        Metode Pembayaran
      </div>
      <div className="flex cursor-pointer items-center space-x-8 py-5">
        <div className="flex-none w-fit">
          <img
            alt="Mandiri Virtual Account"
            width={100}
            height={100}
            className="ml-12"
            style={{ color: 'transparent' }}
            src={mandiri}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="BNI Virtual Account"
            width={80}
            height={80}
            className=""
            style={{ color: 'transparent' }}
            src={bni}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="BSI Virtual Account"
            width={80}
            height={80}
            className=""
            style={{ color: 'transparent' }}
            src={bsi}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="BCA Virtual Account"
            width={70}
            height={70}
            className=""
            style={{ color: 'transparent' }}
            src={bca}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="BTN Virtual Account"
            width={45}
            height={45}
            className="ml-4"
            style={{ color: 'transparent' }}
            src={btn}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="BJB Virtual Account"
            width={70}
            height={70}
            className="ml-4"
            style={{ color: 'transparent' }}
            src={bjb}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="DANA"
            width={70}
            height={70}
            className="ml-4"
            style={{ color: 'transparent' }}
            src={dana}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="OVO"
            width={50}
            height={50}
            style={{ color: 'transparent' }}
            src={ovo}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="Link Aja"
            width={40}
            height={40}
            style={{ color: 'transparent' }}
            src={linkaja}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="Credit Card"
            width={70}
            height={70}
            style={{ color: 'transparent' }}
            src={credit}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="KRI"
            width={70}
            height={70}
            style={{ color: 'transparent' }}
            src={kri}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="PosPay"
            width={50}
            height={50}
            className="ml-4"
            style={{ color: 'transparent' }}
            src={pospay}
          />
        </div>
      </div>
      <div className="mt-7 px-12 font-bold text-custom-24">
        Download Aplikasi
      </div>
      <div className="flex cursor-pointer items-center space-x-8 py-5 ">
        <div className="flex-none w-fit ml-12">
          <img
            alt="Google Play"
            width={130}
            height={130}
            style={{ color: 'transparent' }}
            src={googleplay}
          />
        </div>
        <div className="flex-none w-fit">
          <img
            alt="Apple Store"
            width={130}
            height={130}
            style={{ color: 'transparent' }}
            src={applestore}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
