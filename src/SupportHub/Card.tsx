import {cards} from './config';

const Card = () => {
  return (
    <div className="flex flex-wrap justify-between my-10 mx-auto w-5/6">
      {
        cards.map((item, index) => {
          return (
            <div key={index} className="bg-blue text-white xxs:w-[90%] md:w-[40%] xl:w-[20%] p-4 m-5">
              <img src={item.imgSrc} alt="support hub icons" className="mx-auto my-5" />
              <article>
                <h1 className="text-center mb-5 text-3xl uppercase font-extralight">{item.title}</h1>
                <p className="text-2xl font-thin mb-5">{item.content}</p>
                {
                  item.readMoreBtn ? <button className="bg-primaryHeader w-full h-14">Read more</button> : null
                }
              </article>
            </div>
          )
        })
      }
    </div>
  )
};

export default Card;