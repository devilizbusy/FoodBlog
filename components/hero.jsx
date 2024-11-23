import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-[839px] w-full max-w-[1440px] mx-auto overflow-hidden bg-white">
      {/* SVG Background */}
      <svg
        width="1440"
        height="804"
        viewBox="0 0 1440 804"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <rect width="1440" height="804" fill="white" />
      </svg>

      {/* Left Content Section */}
      <div className="absolute left-[100px] top-[33px] max-w-[520px] z-20">
        <div className="mb-[102px]">
          <Image
            src="/images/food-truck.png"
            alt="Food delivery truck"
            width={107}
            height={83}
            priority
          />
        </div>

        <h1 className="font-bold">
          <span className="block text-[62px] leading-[69px] text-[#0E2368]">
            Discover the
          </span>
          <div className="flex gap-[14px] text-[62px] leading-[69px]">
            <span className="text-[#E23744]">Best</span>
            <span className="text-[#0E2368]">Food</span>
          </div>
          <span className="block text-[62px] leading-[69px] text-[#0E2368]">
            and Drinks
          </span>
        </h1>

        <p className="mt-[26px] text-[16.44px] leading-[27.41px] text-[#444957] max-w-[345px]">
          Naturally made Healthcare Products for the better care & support of your body.
        </p>

        <button className="mt-[41px] h-[63px] w-[190px] bg-[#E23744] rounded-[34px] text-white text-[18px] font-medium hover:bg-opacity-90 transition-all">
          Explore Now!
        </button>
      </div>

      {/* Right Section with Curved Pizza Image */}
      <div className="absolute right-0 top-0 w-[752px] h-[839px] overflow-hidden">
        {/* Get In Touch Button */}
        <button className="absolute top-[32px] right-[42px] z-30 px-[33px] py-[14px] bg-[#E23744] border-2 border-white rounded-[21px] text-white text-[16px] font-medium hover:bg-white hover:text-[#E23744] transition-all">
          Get In Touch
        </button>

        {/* Vector Shape */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/vector-1.png"
            alt="Vector Shape"
            width={752}
            height={839}
            className="object-cover"
            priority
          />
        </div>

        {/* Pizza Image */}
        <div className="absolute top-[5px] left-[17px] w-[735px] h-[804px] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-image.jpg"
              alt="Delicious pizza with toppings"
              fill
              className="object-cover rounded-bl-[198.9px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
