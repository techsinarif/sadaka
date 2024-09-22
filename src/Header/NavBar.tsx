const NavBar = () => {
  return (
    <>
      <nav className="xxs:w-full xxs:gap-3 lg:gap-10 lg:w-auto flex flex-wrap text-center">
        <li className="xxs:w-full lg:w-auto list-none self-center text-lg uppercase">
          <a href="#" className="py-2.5 hover:border-b-4">home</a>
        </li>
        <li className="xxs:w-full lg:w-auto list-none self-center text-lg uppercase">
          <a href="#" className="py-2.5 hover:border-b-4">about</a>
        </li>
        <li className="xxs:w-full lg:w-auto list-none self-center text-lg uppercase">
          <a href="#" className="py-2.5 hover:border-b-4">causes</a>
        </li>
        <li className="xxs:w-full lg:w-auto list-none self-center text-lg uppercase">
          <a href="#" className="py-2.5 hover:border-b-4">gallery</a>
        </li>
        <li className="xxs:w-full lg:w-auto list-none self-center text-lg uppercase">
          <a href="#" className="py-2.5 hover:border-b-4">contact</a>
        </li>
      </nav>
    </>
  )
};

export default NavBar;