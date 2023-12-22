import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';

export const Slider = ({slides}) => {
    return (


        <Swiper
        
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 0,
            shadowScale: 0.94,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
         
        >
          {slides.map((slide) => (

          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title}/>
          </SwiperSlide>
          
          
          ))}
          
          
    
        </Swiper>
      )
      
};