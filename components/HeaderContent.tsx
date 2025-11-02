import Image from 'next/image';


export default function HeaderContent() {
  return (
    <div className="py-4 flex justify-center px-6">
      <div className="max-w-[1120px] gap-[49px] w-full flex justify-between">
        <Image src="/images/logo.svg" alt="Logo" width={147} height={40} />

        <div className='flex gap-[7px] items-center text-[13px] tracking-[-0.26px]'>
          <div className='mr-2 flex gap-[5px] text-[#404042]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.82031 18.8007H16.5476V17.9145C16.5363 16.6684 16.2521 15.446 15.7213 14.3616C15.1906 13.2768 14.4307 12.3656 13.5128 11.7125C12.5948 11.0594 11.5485 10.686 10.4718 10.6271C10.3757 10.6217 10.2798 10.6191 10.1839 10.6189C10.0881 10.6191 9.99217 10.6217 9.89621 10.6271C8.81945 10.686 7.77313 11.0594 6.85523 11.7125C5.9372 12.3656 5.17731 13.2768 4.64658 14.3616C4.11584 15.446 3.83157 16.6684 3.82031 17.9145V18.8007Z" stroke="#404042" strokeWidth="0.909091" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0696 8.29125C12.0281 8.29125 13.6157 6.70359 13.6157 4.74511C13.6157 2.78663 12.0281 1.19897 10.0696 1.19897C8.11109 1.19897 6.52344 2.78663 6.52344 4.74511C6.52344 6.70359 8.11109 8.29125 10.0696 8.29125Z" stroke="#404042" strokeWidth="0.909091" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Olá, Taila
          </div>

          <button className='rounded-full py-[7px] px-4 bg-[#C4E5C0] flex gap-[5px] items-center cursor-pointer font-semibold text-[#056939]'>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.24062 2.23999H13.4406C13.4406 2.23999 15.0406 2.23999 15.0406 3.83999V15.04C15.0406 15.04 15.0406 16.64 13.4406 16.64H2.24062C2.24062 16.64 0.640625 16.64 0.640625 15.04V3.83999C0.640625 3.83999 0.640625 2.23999 2.24062 2.23999Z" stroke="#056939" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.0391 0.639893V3.83989" stroke="#056939" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.64062 0.639893V3.83989" stroke="#056939" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.640625 7.03979H15.0406" stroke="#056939" strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Agendamentos
          </button>

          <button className='rounded-full py-[7px] px-4 bg-[#CACACA80] flex gap-[5px] items-center cursor-pointer font-semibold text-[#404042]'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.49219 14.2826L9.775 10.9998L12.2328 13.4576L15.5156 10.1748" stroke="#404042" strokeMiterlimit="10" />
              <path d="M14.282 2.80176H15.6313C17.15 2.80176 18.3812 4.03297 18.3812 5.55176V17.2736C18.3812 18.7924 17.15 20.0236 15.6312 20.0236H6.36719C4.8484 20.0236 3.61719 18.7924 3.61719 17.2736V5.55176C3.61719 4.03298 4.8484 2.80176 6.36719 2.80176H7.71641" stroke="#404042" strokeMiterlimit="10" />
              <path d="M14.2766 1.97656V3.61797C14.2743 4.0526 14.1006 4.46879 13.7933 4.77612C13.486 5.08346 13.0698 5.25712 12.6352 5.25938H9.35234C8.91771 5.25712 8.50152 5.08346 8.19419 4.77612C7.88685 4.46879 7.7132 4.0526 7.71094 3.61797V1.97656H14.2766Z" stroke="#404042" strokeMiterlimit="10" />
            </svg>
            Resultados
          </button>

          <button className='cursor-pointer'>
            <svg width="55" height="38" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1.5" width="53.5" height="35" rx="17.5" stroke="#CACACA" />
              <path d="M23.8125 10.4062V13.8438" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.6875 10.4062V13.8438" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34.9844 19.8594V13.8438C34.9844 13.3879 34.8033 12.9507 34.481 12.6284C34.1586 12.3061 33.7215 12.125 33.2656 12.125H21.2344C20.7785 12.125 20.3414 12.3061 20.019 12.6284C19.6967 12.9507 19.5156 13.3879 19.5156 13.8438V25.875C19.5156 26.3308 19.6967 26.768 20.019 27.0903C20.3414 27.4127 20.7785 27.5938 21.2344 27.5938H28.1094" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.5156 17.2812H34.9844" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.6875 25.0156H35.8438" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M33.2656 22.4375V27.5938" stroke="#404042" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}