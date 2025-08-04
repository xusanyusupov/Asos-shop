import { useState,useEffect } from "react"
import Accessories from "@/components/Navigate/components/Accessories"
import Activewear from "@/components/Navigate/components/Activewear"
import Brands from "@/components/Navigate/components/Brands"
import Clothing from "@/components/Navigate/components/Clothing"
import Grooming from "@/components/Navigate/components/Grooming"
import NewIn from "@/components/Navigate/components/NewIn"
import Sale from "@/components/Navigate/components/Sale"
import Shoes from "@/components/Navigate/components/Shoes"
import TopMan from "@/components/Navigate/components/TopMan"
import Trending from "@/components/Navigate/components/Trending"
import { FaXmark } from "react-icons/fa6"
import { useMenuStore } from "@/store/navigateStore"

import sale from '@/assets/lg/sale.png'



const componentsMap = {
    Sale,
    "New in": NewIn,
    Clothing,
    Trending,
    Shoes,
    Accessories,
    Brands,
    Activewear,
    Grooming,
    'Top Man': TopMan,
};



const menuItems = Object.keys(componentsMap)

const index = () => {
  const [openDropdown,setOpenDropdown] = useState<string | null>(null)
  const [isMobile,setIsMobile] = useState(false)

  useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleEnter = (name: string) => () => setOpenDropdown(name);
  const handleLeave = (name: string) => () => {
    if (openDropdown === name) setOpenDropdown(null);
  };
  const { openMenu, setOpenMenu } = useMenuStore();
  if (!openMenu) return
    

  return (
    <>
    <div className="bg-navigateBg">
      <div className="container relative">
      {openMenu && (
        <div className="relative max-lg:fixed max-lg:bg-modalBg max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen">                                   
                                                                                                                                                              {/* bu yerda mt  */}
        <div className="max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:flex max-lg:flex-col max-lg:items-start max-lg:w-72 max-lg:h-screen max-lg:bg-white max-lg:pt-10  max-xs:w-full max-lg:overflow-y-scroll">
          <button className="hidden max-lg:flex max-lg:absolute max-lg:right-0 max-lg:top-0 max-lg:p-2" onClick={() => setOpenMenu(false)}><FaXmark className="text-2xl"/></button>
          {menuItems.map((item) => (
            <button
              key={item}
              onMouseEnter={handleEnter(item)}
              onMouseLeave={handleLeave(item)}
              className={`font-light text-sm px-3 py-3 transition-all duration-300 max-lg:bg-transparent
              max-lg:py-4 max-lg:w-full
                ${
                  item === "Sale"
                    ? `skew-x-[-12deg] ${
                        openDropdown === item 
                          ? 'bg-white text-black'
                          : 'bg-red-600 text-white lg:hover:bg-white lg:hover:text-black'
                      }`
                    : `${
                        openDropdown === item
                          ? 'bg-white text-navigateBg'
                          : 'text-white'
                      }`
                }
              `}
            >
              <div className="flex items-center justify-between w-full border rounded-xl px-2 " ><span className="inter max-lg:text-black">{item}</span> <img src={sale} className="w-16 h-16" alt="" /></div>
            </button>
          ))}
        </div>
        </div>
      )}

         {!isMobile && (
          <div className="absolute left-0 top-full w-full z-40">
            {menuItems.map((item) => {
              const Component = componentsMap[item as keyof typeof componentsMap];
              return (
                <Component
                  key={item}
                  open={openDropdown === item}
                  onMouseEnter={handleEnter(item)}
                  onMouseLeave={handleLeave(item)}
                />
              );
            })}
          </div>
        )}

      </div>
    </div>
    </>
  )
}

export default index