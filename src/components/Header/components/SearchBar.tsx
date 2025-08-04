import logo from "@/assets/Logo.svg";
import { useMenuStore } from "@/store/navigateStore";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegFile, FaRegMessage, FaRegUser, FaXmark } from "react-icons/fa6";
import {
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { LuCircleHelp } from "react-icons/lu";

const SearchBar = () => {
  const [isModal, setIsModal] = useState(false);
  const [open,setOpen] = useState(false)
  const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth <= 1024)
  useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024)
        }
        
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

    const dropdown = (
      <div
      className='w-80 z-[49]  absolute top-5 right-0 border rounded-md flex flex-col bg-white'>
          <div className='w-full flex items-center justify-between border-b-2 px-5 py-2'>
                  <div className='flex items-center gap-2'>
                      <a href="#" className='inter underline underline-offset-1 hover:text-blue-500'>Sign in</a>
                      <span className='inter underline underline-offset-1'> | </span>
                      <a href="#" className='inter underline underline-offset-1 hover:text-blue-500'>Join</a>
                  </div>
                  <button onClick={() => setOpen(false)}><FaXmark className='font-bold text-2xl'/></button>
          </div>
          <a href="#" className='w-full px-4 py-4 flex items-center gap-3 hover:text-blue-500'><FaRegUser className='text-xl'/>My Account</a>
          <a href="#" className='w-full px-4 py-4 flex items-center gap-3 hover:text-blue-500'><FaRegFile  className='text-xl'/>My Orders</a>
          <a href="#" className='w-full px-4 py-4 flex items-center gap-3 hover:text-blue-500'><LuCircleHelp className='text-xl'/>Return Information</a>
          <a href="#" className='w-full px-4 py-4 flex items-center gap-3 hover:text-blue-500'><FaRegMessage className='text-xl'/>Contact Preferences</a>
      </div> 
  )   

  const setOpenMenu = useMenuStore((state) => state.setOpenMenu)

  return (
    <>
      {/* HEADER */}
      <div className="bg-searchBar h-16">
        <div className="container h-full relative max-lg:w-full max-lg:max-w-none">
          <div
            id="one"
            className="w-full h-full flex items-center justify-between"
          >
            <div className="flex items-center">
              <button className="hidden max-lg:block" onClick={() => setOpenMenu(true)}>
                <HiBars3 className="text-white text-2xl" />
              </button>
              <img
                src={logo}
                alt="ASOS logo"
                className="invert brightness-200 ml-2 w-20 h-6 max-xs:w-16 max-xs:h-5 max-xs:ml-2"
              />
            </div>

            <a
              href="#"
              className="inter py-5 px-3 cursor-pointer border-x border-navigateBg max-lg:border-transparent font-bold text-white hover:bg-navigateBg max-lg:hidden"
            >
              WOMAN
            </a>

            <div className="w-4/5 mx-3 hidden md:flex">
              <div className="w-full bg-white rounded-3xl flex h-10 items-center pl-8 pr-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none w-full outline-none inter"
                />
                <button className="text-gray-500 text-xl">
                  <FaSearch />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <HiOutlineSearch
                onClick={() => setIsModal(true)}
                className="text-white cursor-pointer hidden max-md:flex text-2xl"
              />
              {
                        isSmallScreen ? (
                        <a href="#">
                            <HiOutlineUser
                            onClick={() => setOpen(true)}
                            className='text-xl text-white cursor-pointer max-lg:text-searchBarBg max-lg:text-2xl'
                            />
                        </a>
                        ) : (
                        <>
                            <HiOutlineUser
                            onClick={() => setOpen(prev => !prev)}
                            className='text-xl text-white cursor-pointer max-lg:text-searchBarBg max-lg:text-2xl'
                            />
                            {open && dropdown}
                        </>
                        )
                    }
              <HiOutlineHeart className="text-white cursor-pointer text-2xl" />
              <HiOutlineShoppingCart className="text-white cursor-pointer text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* WOMAN link for mobile */}
      <div className="hidden max-lg:flex max-lg:py-3 max-lg:px-3 max-lg:justify-center max-lg:bg-black">
        <a
          href="#"
          className="inter cursor-pointer font-bold text-white hover:bg-navigateBg max-xl:hidden max-lg:p-1 max-lg:flex max-lg:border-2 max-lg:border-white"
        >
          WOMAN
        </a>
      </div>

      {isModal && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-4">
          <button
            onClick={() => setIsModal(false)}
            className="block float-right text-3xl font-bold pb-3 text-gray-800"
          > <HiXMark /></button>
          <br />
          <div className="w-full bg-white rounded-3xl border-2 border-orange-500 flex h-10 items-center pl-8 pr-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none w-full outline-none inter"
                />
                <button className="text-gray-500 text-xl">
                  <FaSearch />
                </button>
              </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
