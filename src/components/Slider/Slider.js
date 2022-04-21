import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// My styles
import classes from "./Slider.module.css";
const placeHolderArray = [
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
  "https://picsum.photos/400/600",
];
export default function Slider(props) {
  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={30}>
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
                      {/* TODO fix vertical alignment */}
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
