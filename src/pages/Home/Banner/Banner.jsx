import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
 const imgSlider=[
     banner1,
     banner2,
     banner3,
 ]


const Banner = () => {
    return (
        <div className='w-7xl mx-auto' >
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
         spaceBetween={30}
         loop={true}
         centeredSlides={true}
         
         autoplay={true}
           delay={1000}
         
        modules={[Pagination,Autoplay]}
        className="mySwiper my-5   h-[500px]"
        onAutoplay={true}
      >

        {
             imgSlider.map(slide=>  <SwiperSlide><img className='w-full h-full' src={slide} alt="" /></SwiperSlide> )
        }
       
        
      </Swiper>
        </div>
    );
};

export default Banner;