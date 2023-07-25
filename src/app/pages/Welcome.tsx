"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Welcome = () => {
  return (
    <>
      <div className="bg-[url('/assets/img/bg.jpg')] bg-cover z-0 w-screen h-screen">
        <div className="w-screen h-screen text-white bg-dark-blue/90 z-10 pt-20 md: lg:">
          <div className="box-border flex flex-wrap justify-center items-center p-6 md: lg:">
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
              className="mt-4"
              centeredSlides={true}
              centeredSlidesBounds={true}
              breakpoints={{
                1024: {
                  spaceBetween: 50,
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Image
                  src="/assets/img/image-1.png"
                  alt=""
                  width={500}
                  height={0}
                  className="rounded-lg md:ml-28 lg:w-[40rem]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/img/image-2.jpg"
                  alt=""
                  width={500}
                  height={0}
                  className="rounded-lg md:ml-28 lg:w-[40rem]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/img/image3.jpg"
                  alt=""
                  width={500}
                  height={0}
                  className="rounded-lg md:ml-28 lg:w-[40rem]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/img/image-4.jpg"
                  alt=""
                  width={500}
                  height={0}
                  className="rounded-lg md:ml-28 lg:w-[40rem]"
                />
              </SwiperSlide>
              <br />
              <p className="text-transparent">...</p>
            </Swiper>
            <p className="text-4xl text-justify font-bold text-sky-400 p-4 pb-0 md:text-center lg:text-5xl">
              A solução para o seu negócio.
            </p>
            <p className="p-4 text-justify md:text-center">
              Entregamos o que você precisa, de forma ágil, eficaz e com valor
              justo, que cabe no seu bolso. Faça hoje mesmo um orçamento
              conosco!
            </p>
            <button className="rounded-lg mt-8 p-3 text-white bg-blue-800 hover:bg-blue-600">
              Solicitar orçamento
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
