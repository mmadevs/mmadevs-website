"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Welcome2 = () => {
  return (
    <div className="bg-[url('/assets/img/bg.jpg')] bg-cover z-0 w-screen h-screen pt-20 p-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        speed={2000}
        effect="fade"
        modules={[Autoplay, EffectFade, Pagination]}
        className="mt-4 flex text-center justify-center"
        breakpoints={{
          1024: {
            spaceBetween: 50,
            slidesPerView: 1,
          },
        }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/image-1.png"
              alt=""
              width={500}
              height={0}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/image-2.jpg"
            alt=""
            width={500}
            height={0}
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/image3.jpg"
            alt=""
            width={500}
            height={0}
            className="rounded-lg "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/image-4.jpg"
            alt=""
            width={500}
            height={0}
            className="rounded-lg"
          />
        </SwiperSlide>
        <br />
        <p className="text-transparent">...</p>
      </Swiper>
    </div>
  );
};

export default Welcome2;
