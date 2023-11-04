import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({ children, ...props }) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect='fade'
      speed={800}
      loop
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      {...props}
    >
      {children}
    </Swiper>
  );
};
