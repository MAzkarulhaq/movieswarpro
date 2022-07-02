import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import slid01 from "./assets/1.jpg";
import slid02 from "./assets/2.jpg";
import slid03 from "./assets/3.jpg";
import slid04 from "./assets/4.jpg";
import slid05 from "./assets/5.jpg";
import slid06 from "./assets/6.jpg";
import slid07 from "./assets/7.jpg";
import slid08 from "./assets/8.jpg";
import slid09 from "./assets/9.jpg";

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <section className="slider-section">
        <div className="hidebelow no-gutters">
          <div className="row blog no-gutters">
            <div className="col-md-12 no-gutters">
              {/* <!-- Slider main container --> */}

              <Swiper
                spaceBetween={60}
                slidesPerView={3}
                speed={900}
                loop={true}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: false }}
                scrollbar={{ draggable: false }}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid09} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid08} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid09} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
              </Swiper>
              {/* <!--.Carousel--> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
