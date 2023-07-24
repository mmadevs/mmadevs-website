"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const Welcome = () => {
  return (
    <>
      <div className="bg-[url('/assets/img/bg.jpg')] bg-cover z-0">
        <div className="w-screen h-screen  text-white bg-dark-blue/90 z-10 pt-20">
          <div className="box-border flex flex-wrap justify-center  p-6 ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 2000 }}
              scrollbar={{ draggable: true }}
              speed={2000}
              effect="fade"
              modules={[Autoplay, Scrollbar, EffectFade]}
            >
              <SwiperSlide>
                <Image
                  src="/assets/img/image-1.png"
                  alt=""
                  width={500}
                  height={0}
                  className="rounded-lg"
                />
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
                  className="rounded-lg"
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
              ...
            </Swiper>
            <p className="text-4xl font-bold text-sky-400 mt-4">
              A solução para o seu negócio.
            </p>
            <p className="mt-2">
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
