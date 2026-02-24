import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import LeftNavButton from "../NavButton/LeftNavButton";
import RightNavButton from "../NavButton/RightNavButton";

function Carousel({ data = [], renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <button ref={prevRef} className={styles.navLeft}>
        <LeftNavButton />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      <button ref={nextRef} className={styles.navRight}>
        <RightNavButton />
      </button>
    </div>
  );
}

export default Carousel;
