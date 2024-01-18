import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick'
import './navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="w-96 h-96 relative bg-white">
      <div className="left-[136px] top-[24px] absolute">
    <div className="w-24 h-8 left-0 top-[1px] absolute bg-blue-800" />
    <div className="w-80 h-5 left-[728px] top-0 absolute justify-start items-center gap-8 inline-flex">
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Our Services</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Why Us</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Testimonial</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">FAQ</div>
    </div>
  </div>
  <div className="w-96 left-[136px] top-[2998px] absolute justify-between items-start inline-flex">
    <div className="w-64 relative">
      <div className="w-64 left-0 top-0 absolute text-black text-sm font-bold font-['Arial'] leading-tight">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
      <div className="w-64 left-0 top-[56px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">binarcarrental@gmail.com</div>
      <div className="w-64 left-0 top-[92px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">081-233-334-808</div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Our services</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Why Us</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">Testimonial</div>
      <div className="text-black text-sm font-normal font-['Arial'] leading-tight">FAQ</div>
    </div>
    <div className="w-64 relative">
      <div className="w-64 left-0 top-0 absolute text-black text-sm font-bold font-['Arial'] leading-tight">Connect with us</div>
      <div className="w-56 h-8 left-0 top-[36px] absolute justify-start items-start gap-4 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
      </div>
    </div>
    <div className="w-64 relative">
      <div className="w-24 h-8 left-0 top-[36px] absolute bg-blue-800" />
      <div className="w-64 left-0 top-0 absolute text-black text-sm font-bold font-['Arial'] leading-tight">Copyright Binar 2022</div>
    </div>
  </div>
  <div className="w-96 h-80 left-[136px] top-[2504px] absolute">
    <div className="w-96 h-24 left-0 top-[4px] absolute">
      <div className="w-96 left-0 top-0 absolute text-black text-2xl font-bold font-['Arial'] leading-9">Frequently Asked Question</div>
      <div className="w-96 left-0 top-[52px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    </div>
    <div className="w-96 h-80 left-[500px] top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-white rounded border border-neutral-300" />
        <div className="w-6 h-6 left-[620px] top-[16px] absolute" />
        <div className="left-[24px] top-[18px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Apa saja syarat yang dibutuhkan?</div>
      </div>
      <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-white rounded border border-neutral-300" />
        <div className="w-6 h-6 left-[620px] top-[16px] absolute" />
        <div className="left-[24px] top-[18px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Berapa hari minimal sewa mobil lepas kunci?</div>
      </div>
      <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-white rounded border border-neutral-300" />
        <div className="w-6 h-6 left-[620px] top-[16px] absolute" />
        <div className="left-[24px] top-[18px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
      </div>
      <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-white rounded border border-neutral-300" />
        <div className="w-6 h-6 left-[620px] top-[16px] absolute" />
        <div className="left-[24px] top-[18px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Apakah Ada biaya antar-jemput?</div>
      </div>
      <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-white rounded border border-neutral-300" />
        <div className="w-6 h-6 left-[620px] top-[16px] absolute" />
        <div className="left-[24px] top-[18px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Bagaimana jika terjadi kecelakaan</div>
      </div>
    </div>
  </div>
  <div className="w-96 h-80 left-[136px] top-[2078px] absolute">
    <div className="w-96 h-80 left-0 top-0 absolute bg-blue-800 rounded-xl" />
    <div className="left-[270px] top-[64px] absolute text-center text-white text-4xl font-bold font-['Arial'] leading-10">Sewa Mobil di (Lokasimu) Sekarang</div>
    <div className="w-96 left-[342px] top-[134px] absolute text-center text-white text-sm font-bold font-['Arial'] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
    <div className="w-36 h-9 px-3 py-2 left-[514px] top-[226px] absolute bg-green-400 rounded-sm border justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-sm font-bold font-['Arial'] leading-tight">Mulai Sewa Mobil</div>
    </div>
  </div>
  <div className="w-96 h-96 left-[-241px] top-[1540px] absolute">
    <div className="w-96 left-[707px] top-0 absolute text-center text-black text-2xl font-bold font-['Arial'] leading-9">Testimonial</div>
    <div className="w-96 left-[707px] top-[52px] absolute text-center text-black text-sm font-bold font-['Arial'] leading-tight">Berbagai review positif dari para pelanggan kami</div>
    <div className="w-96 h-64 left-0 top-[112px] absolute">
      <div className="w-96 h-64 left-[651px] top-0 absolute">
        <div className="w-96 h-64 left-0 top-0 absolute bg-indigo-50 rounded-lg shadow" />
        <div className="w-96 h-32 left-[172px] top-[69px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start inline-flex" />
          <div className="w-96 text-black text-sm font-bold font-['Arial'] leading-tight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
          <div className="w-96 text-black text-sm font-normal font-['Arial'] leading-tight">John Dee 32, Bromo</div>
        </div>
        <img className="w-20 h-20 left-[46px] top-[95px] absolute rounded-full" src="https://via.placeholder.com/80x80" />
      </div>
      <div className="w-96 h-64 left-[1302px] top-0 absolute">
        <div className="w-96 h-64 left-0 top-0 absolute bg-indigo-50 rounded-lg shadow" />
        <div className="w-96 h-32 left-[172px] top-[69px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start inline-flex" />
          <div className="w-96 text-black text-sm font-bold font-['Arial'] leading-tight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
          <div className="w-96 text-black text-sm font-normal font-['Arial'] leading-tight">John Dee 32, Bromo</div>
        </div>
        <img className="w-20 h-20 left-[46px] top-[95px] absolute rounded-full" src="https://via.placeholder.com/80x80" />
      </div>
      <div className="w-96 h-64 left-0 top-0 absolute">
        <div className="w-96 h-64 left-0 top-0 absolute bg-indigo-50 rounded-lg shadow" />
        <div className="w-96 h-32 left-[172px] top-[69px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start inline-flex" />
          <div className="w-96 text-black text-sm font-bold font-['Arial'] leading-tight">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>
          <div className="w-96 text-black text-sm font-normal font-['Arial'] leading-tight">John Dee 32, Bromo</div>
        </div>
        <img className="w-20 h-20 left-[32px] top-[95px] absolute rounded-full" src="https://via.placeholder.com/80x80" />
      </div>
    </div>
    <div className="w-20 h-8 left-[917px] top-[406px] absolute">
      <div className="w-8 h-8 left-0 top-0 absolute">
        <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
        <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
      </div>
      <div className="w-8 h-8 left-[56px] top-0 absolute">
        <div className="w-8 h-8 left-0 top-0 absolute bg-green-400 rounded-full" />
        <div className="w-5 h-5 left-[6px] top-[6px] absolute bg-green-400" />
      </div>
    </div>
  </div>
  <div className="w-96 h-80 left-[136px] top-[1132px] absolute">
    <div className="w-96 left-0 top-0 absolute text-black text-2xl font-bold font-['Arial'] leading-9">Why Us?</div>
    <div className="w-96 left-0 top-[52px] absolute text-black text-sm font-bold font-['Arial'] leading-tight">Mengapa harus pilih Binar Car Rental?</div>
    <div className="w-96 h-48 left-0 top-[112px] absolute justify-start items-start gap-8 inline-flex">
      <div className="p-6 rounded-lg border border-stone-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-yellow-400 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="text-black text-base font-bold font-['Arial'] leading-normal">Mobil Lengkap</div>
        <div className="w-56 text-black text-sm font-bold font-['Arial'] leading-tight">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</div>
      </div>
      <div className="p-6 rounded-lg border border-stone-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-rose-500 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="text-black text-base font-bold font-['Arial'] leading-normal">Harga Murah</div>
        <div className="w-56 text-black text-sm font-bold font-['Arial'] leading-tight">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</div>
      </div>
      <div className="p-6 rounded-lg border border-stone-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="text-black text-base font-bold font-['Arial'] leading-normal">Layanan 24 Jam</div>
        <div className="w-56 text-black text-sm font-bold font-['Arial'] leading-tight">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</div>
      </div>
      <div className="p-6 rounded-lg border border-stone-300 flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-green-400 rounded-full" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute" />
        </div>
        <div className="text-black text-base font-bold font-['Arial'] leading-normal">Sopir Profesional</div>
        <div className="w-56 text-black text-sm font-bold font-['Arial'] leading-tight">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</div>
      </div>
    </div>
  </div>
  <div className="w-96 h-96 left-[206px] top-[604px] absolute">
    <div className="w-96 h-96 left-[559px] top-[36px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <div className="w-96 text-black text-2xl font-bold font-['Arial'] leading-9">Best Car Rental for any kind of trip in (Lokasimu)!</div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="w-96 text-black text-sm font-bold font-['Arial'] leading-tight">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-slate-300 rounded-full" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="text-black text-sm font-bold font-['Arial'] leading-tight">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-slate-300 rounded-full" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="text-black text-sm font-bold font-['Arial'] leading-tight">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-slate-300 rounded-full" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="text-black text-sm font-bold font-['Arial'] leading-tight">Sewa Mobil Jangka Panjang Bulanan</div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-slate-300 rounded-full" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="text-black text-sm font-bold font-['Arial'] leading-tight">Gratis Antar - Jemput Mobil di Bandara</div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-slate-300 rounded-full" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="text-black text-sm font-bold font-['Arial'] leading-tight">Layanan Airport Transfer / Drop In Out</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-96 h-96 left-0 top-0 absolute">
      <div className="w-32 h-32 left-0 top-[1px] absolute bg-green-300 rounded-full" />
      <div className="w-12 h-12 left-[60px] top-[336px] absolute bg-yellow-400 rounded-full" />
      <div className="w-6 h-6 left-[383px] top-[43px] absolute bg-rose-500 rounded-full" />
      <div className="w-96 h-96 left-[99px] top-0 absolute">
        <div className="w-96 h-96 left-0 top-[68px] absolute bg-blue-800 rounded-full" />
        <div className="w-96 h-96 left-0 top-[68px] absolute">
          <div className="w-96 h-96 left-0 top-0 absolute bg-blue-800 rounded-full" />
          <img className="w-96 h-96 left-0 top-[-68px] absolute" src="https://via.placeholder.com/374x562" />
        </div>
        <img className="w-96 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/374x366" />
      </div>
    </div>
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
  </div>
</div>
</>
  )
}

export default App
