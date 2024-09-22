import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import NavBar from './NavBar';

const SecondaryHeader = () => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false)

  useEffect(() => {
    if(window.innerWidth >= 1024){
      setNavVisibility(true);
    }
  }, [])

  return (
    <div className="w-full bg-secondaryHeader">
      <div className="w-5/6 mx-auto flex flex-wrap justify-between text-white text-base">
        <div className="p-2.5">
          <img src="/assets/images/sadaka-logo.png" alt="app logo..." />
        </div>
        <div className="flex items-center text-4xl lg:hidden">
          <AiOutlineMenu onClick={() => setNavVisibility(!navVisibility)} />
        </div>
        {
          navVisibility ? <NavBar /> : null
        }
      </div>
    </div>
  )
};

export default SecondaryHeader;