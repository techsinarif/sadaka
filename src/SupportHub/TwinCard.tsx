import { twinCards } from "./config";

const TwinCard = () => {
  return (
    <div className="w-5/6 flex flex-wrap justify-between mx-auto">
      {
        twinCards.map((item, index) => {
          return (
            <div key={index} className="relative m-5 xxs:w-[100%] lg:w-[45%] group">
              <img src={item.imgSrc} alt="Support hub images..." className="w-full"/>
              <div className="hidden absolute top-0 text-white bg-transparent-darkblue text-2xl font-thin overflow-auto border-solid border-b-2 p-[50px] h-[calc(100%-96px)] group-hover:block">
                {
                  item.content.length > 0 ? (
                    item.content.map((contentItem, contentIndex) => {
                      return (
                        <p className="pb-8" key={contentIndex}>{contentItem}</p>
                      )
                    })
                  ) : null
                }
              </div>
              <article className="absoute w-full bottom-0 bg-transparent-darkblue p-5 text-center">
                <h1 className="text-white uppercase text-2xl font-medium">{item.title}</h1>
                <h6 className="text-white uppercase text-base font-thin">{item.subTitle}</h6>
              </article>
            </div>
          )
        })
      }
    </div>
  )
};

export default TwinCard;