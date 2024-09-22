import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { slides } from "./config";

const Slider = () => {
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const prev = () => {
    setSlideIdx((slideIdx) => (slideIdx == 0 ? slides.length - 1: slideIdx -1))
  }

  const next = () => {
    setSlideIdx((slideIdx) => (slideIdx == slides.length - 1 ? 0 : slideIdx + 1))
  }

  useEffect(() => {
    const autoSlide = setInterval(next, 3000);
    return () => clearInterval(autoSlide);
  }, [])

  return(
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${slideIdx * 100}%)`}}>
        {
          slides.map((item, index) => {
            return (
              <img key={index} src={item.imgSrc} alt="slider image..." />
            )
          })
        }
      </div>
      <article className="absolute text-white m-auto w-3/4 xxs:top-[10%] md:top-1/4 bottom-0 left-0 right-0 text-center z-10">
        <h1 className="uppercase xxs:text-base md:text-5xl pb-4">Because they need your help</h1>
        <h5 className="uppercase xxs:text-base md:text-2xl pb-4">Do not let them down</h5>
        <button className="bg-secondaryHeader uppercase text-white p-3">Donate now</button>
      </article>
      <div className="flex justify-between items-center inset-0 absolute">
        <button onClick={prev} className="bg-transparent-blue hover:bg-primaryHeader text-white cursor-pointer py-5 px-1.5">
          <AiOutlineLeft className="text-2xl"/>
        </button>
        <button onClick={next} className="bg-transparent-blue hover:bg-primaryHeader text-white cursor-pointer py-5 px-1.5">
          <AiOutlineRight className="text-2xl"/>
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {
            slides.map((_, index) => {
              return (
                <div key={index} className={`w-3 h-3 rounded-full border border-white border-solid transition-all ${slideIdx === index ? 'bg-white': null}`} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Slider;