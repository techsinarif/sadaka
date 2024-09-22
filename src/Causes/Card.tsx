import { causes } from "./config";

const Card = () => {
  return(
    <>
      <h1 className="text-center text-3xl font-light">Our Causes</h1>
      <div className="flex flex-wrap justify-between w-5/6 mx-auto my-10">
        {
          causes.map((item, index) => {
            return (
              <div key={index} className="text-primaryHeader m-5 border border-solid border-primaryHeader xxs:w-[90%] md:w-[40%] xl:w-[20%]">
                <img src={item.imgSrc} alt="our cause image..." className="w-full"/>
                <article className="p-3">
                  <h1 className="text-center text-xl font-extralight mb-5 uppercase">{item.title}</h1>
                  <p className="text-base font-thin mb-5">{item.detail}</p>
                  {
                    item.donateBtn ? <button className="bg-primaryHeader uppercase text-white w-full h-14">Donate now</button> : null
                  }
                </article>
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Card;