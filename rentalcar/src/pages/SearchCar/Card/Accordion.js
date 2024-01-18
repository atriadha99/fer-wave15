/* eslint-disable react/no-unknown-property */
const Accordion = () => {
  return (
    <div className="mt-4 w-11/12 rounded-md border-2 py-4 px-3 lg:mt-0 lg:w-3/4">
      <p className="mb-4 font-bold">Tentang Paket</p>
      <p className="mb-2 font-bold">Include</p>
      <ul className="mb-4 list-disc pl-7">
        <li>Apa Saja yang termasuk dalam paket misal durasi max 12 jam</li>
        <li>Sudah termasuk sewa bensin selama 12 jam</li>
        <li>Sudah termasuk Tiket Wisata</li>
        <li>Sudah termasuk pajak</li>
      </ul>

      <p className="mb-2 font-bold">Exclude</p>
      <ul className="mb-4 list-disc pl-7">
        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li>
          Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
        </li>
        <li>Tidak termasuk akomodasi penginapan</li>
      </ul>

      <div className="relative overflow-hidden">
        <input
          type="checkbox"
          className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0"
          collapse
        />
        <div className="flex h-12 w-full items-center">
          <h1 className="font-bold">Refund, Reschedule, Overtime</h1>
        </div>
        <div className="absolute top-3 right-3 rotate-0 transition-transform duration-500 peer-checked:-rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-60">
          <ul className="mb-4 list-disc pl-7">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
