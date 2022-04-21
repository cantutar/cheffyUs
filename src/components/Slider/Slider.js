import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// My styles
import classes from "./Slider.module.css";
import { useEffect, useState } from "react";
const placeHolderArray = [
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
];
export default function Slider(props) {
  const width = document.body.offsetWidth;
  const [view, setView] = useState(4);
  useEffect(() => {
    if (width < 575) {
      return setView(1);
    } else if (width > 576 && width < 767) {
      return setView(2);
    } else if (width > 768 && width < 991) {
      return setView(2);
    } else if (width > 992 && width < 1199) {
      return setView(3);
    } else if (width > 1200) {
      return setView(4);
    } else {
      setView(4);
    }
  }, [width]);
  return (
    <>
      <Swiper slidesPerView={view} spaceBetween={30}>
        {placeHolderArray.map((array, i) => {
          return (
            <SwiperSlide key={i}>
              {
                <div className="text-center">
                  <img
                    src={array}
                    alt={i}
                    className="rounded"
                    width={400}
                    height={600}
                  />
                  <h3 className="pt-3 pb-2">Santra Hotel,London</h3>
                  <div className={`mx-auto ${classes.Slider}`}>
                    <p className={classes.inner}>
                      <i className="fa fa-thumbs-o-up text" />
                      <span className="fw-bold fs-5 mx-1">4.4</span> (1.4k
                      Review)
                    </p>
                  </div>
                </div>
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
