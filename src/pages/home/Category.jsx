import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

export default function Category() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} alt='slide1' />
                <h3 className='-mt-20 text-white text-2xl font-semibold text-center'>SALADS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt='slide2' />
                <h3 className='-mt-20 text-white text-2xl font-semibold text-center'>SOUPS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt='slide3' />
                <h3 className='-mt-20 text-white text-2xl font-semibold text-center'>PIZZAS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt='slide4' />
                <h3 className='-mt-20 text-white text-2xl font-semibold text-center'> DESSERTS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt='slide5' />
                <h3 className='-mt-20 text-white text-2xl font-semibold text-center'>VEGETABLE</h3>

            </SwiperSlide>

        </Swiper>

    )
}
