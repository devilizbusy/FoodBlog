import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer 
      className="w-[1440px] h-[467px] mx-auto"
      style={{
        background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)'
      }}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-start justify-between px-[100px] py-[84px]">
        <Image
          src="/images/food-truck.png"
          alt="Food Truck"
          width={161}
          height={125}
        />
        <div>
          <h3 className="text-[18.84px] font-semibold text-[#0E2368]">Contact Us</h3>
          <address className="mt-[14px] not-italic">
            <p className="text-[14.66px] leading-[23.45px] text-[#646874]">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </p>
            <p className="mt-2 text-[14.66px] text-[#646874]">example2020@gmail.com</p>
            <p className="mt-2 text-[14.66px] text-[#646874]">(904) 443-0343</p>
          </address>
        </div>
        <div>
          <h3 className="text-[18.84px] font-semibold text-[#0E2368]">More</h3>
          <ul className="mt-[14px] space-y-[13.6px]">
            <li>
              <a href="#" className="text-[14.66px] text-[#646874]">About Us</a>
            </li>
            <li>
              <a href="#" className="text-[14.66px] text-[#646874]">Products</a>
            </li>
            <li>
              <a href="#" className="text-[14.66px] text-[#646874]">Career</a>
            </li>
            <li>
              <a href="#" className="text-[14.66px] text-[#646874]">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-[18.84px] font-semibold text-[#0E2368]">Social Links</h3>
          <div className="mt-[14px] flex space-x-[21px]">
            <a href="#" className="text-[14.66px] text-[#646874]">Instagram</a>
            <a href="#" className="text-[14.66px] text-[#646874]">Twitter</a>
            <a href="#" className="text-[14.66px] text-[#646874]">Facebook</a>
          </div>
          <p className="mt-[92px] text-[14.66px] text-[#646874]">© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
}
