import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const PrimaryHeader = () => {
  return (
    <div className="w-full bg-primaryHeader">
      <ul className="flex flex-wrap w-5/6 mx-auto justify-between text-white text-base">
        <li className="flex items-center gap-2 p-1">
          <FaPhone />
          <span>+91-98765 43210</span>
        </li>
        <li className="flex items-center gap-2 p-1">
          <AiOutlineMail />
          <span>techsinarif@gmail.com</span>
        </li>
      </ul>
    </div>
  )
};

export default PrimaryHeader;