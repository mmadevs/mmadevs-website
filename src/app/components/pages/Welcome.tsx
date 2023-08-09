"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";
import PageLayout from "../templates/PageLayout";

const Welcome = () => {
  return (
    <PageLayout id="home">
      <div className="bg-[url('/assets/img/bg.jpg')] bg-cover z-0 w-screen h-screen">
        <div className="w-screen h-screen text-white text-center bg-dark-blue/95 z-10 md: lg:">
          <div className="box-border flex flex-wrap justify-center items-center pt-5 pl-8 pr-8 md: lg:">
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
              className="hideen"
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
              <br />
              <p className="text-transparent">...</p>
            </Swiper>
          </div>
          <p className="text-4xl text-center font-bold text-sky-400 pb-0 pt-0 md:text-center lg:text-5xl">
            A solução para o seu negócio.
          </p>
          <p className="p-4 text-center md:text-center mb-6">
            Entregamos o que você precisa, de forma ágil, eficaz e com valor
            justo, que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
          </p>
          <a
            className="rounded-lg p-4 text-white bg-blue-800 hover:bg-blue-600"
            href="#contact-us"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Welcome;
