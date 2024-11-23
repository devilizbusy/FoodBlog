import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-[100px] pt-8 md:pt-[33px]">
        <Image 
          src="/images/food-truck.png" 
          alt="Food Truck" 
          width={107} 
          height={83} 
          priority
          className="w-[80px] md:w-[107px] h-auto transition-transform hover:scale-105"
        />
        <button className="rounded-[21px] bg-white px-4 md:px-[33px] py-[3px] text-sm md:text-base font-medium text-[#414141] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] transition-transform hover:scale-105">
          Get In Touch
        </button>
      </div>
    </nav>
  )
}

