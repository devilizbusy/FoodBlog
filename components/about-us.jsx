import React from 'react';
import Image from 'next/image';

export function AboutUs() {
  return (
    <section 
      className="w-[1440px] h-[467px] mx-auto mt-[186px]"
      style={{
        background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)'
      }}
    >
      <div className="max-w-[1440px] h-[467px] mx-auto relative">
        <Image
          src="/images/about-us.jpg"
          alt="About Us"
          width={384}
          height={468}
          className="absolute top-[107px] left-[205px] rounded-[21px]"
        />
        <div 
          className="absolute w-[447px] h-[254px]"
          style={{
            top: '107px',
            left: '789px',
          }}
        >
          <h2 className="text-[45px] font-semibold text-[#0E2368]">About Us</h2>
          <p className="mt-[27.81px] text-[15px] leading-[27px] text-[#444957]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            t has survived not only five centuries.
          </p>
          <button 
            className="mt-[21px] h-[63px] w-[132px] rounded-[34px] bg-[#E23744] text-[16px] font-semibold text-white hover:bg-opacity-90 transition-all"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

