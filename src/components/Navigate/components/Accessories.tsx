import omega from "@/assets/png-s/omegataq.png";
import dior from "@/assets/png-s/DiorTaq.png";
import gucci from "@/assets/png-s/gucciTaq.png";
import prada from "@/assets/png-s/pradaTaq.png";

import bag1 from '@/assets/bags/BagManLovis.png'
import bag2 from '@/assets/bags/BagManNike.png'
import bag3 from '@/assets/bags/BagPrada.png'
import bag4 from '@/assets/bags/Bagchanel.png'
import bag5 from '@/assets/bags/Baggucci.png'


type AccessoriesProps = {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const shopByProduct = [
  "View all",
  "New in",
  "Sunglasses",
  "Selling Fast",
  "Watches",
  "Belts",
  "Gifts",
  "Ties",
  "Socks",
  "Beanies",
  "Caps & Hats",
  "Gloves",
  "Scarves",
];

const ByJewellery = [
  {
    img: omega,
    title: "View all",
  },
  {
    img: dior,
    title: "Necklaces",
  },
  {
    img: gucci,
    title: "Rings",
  },
  {
    img: prada,
    title: "Bracelets",
  },
  {
    img: omega,
    title: "Earrings",
  },
  {
    img: prada,
    title: "Stainless Steel",
  },
];

const ByBags = [
  {
    bag: bag1,
    title: 'View all',
  },
  {
    bag: bag2,
    title: 'Wallets',
  },
  {
    bag: bag3,
    title: 'Backpacks',
  },
  {
    bag: bag4,
    title: 'Duffle bags',
  },
  {
    bag: bag5,
    title: 'Bum bags',
  },
  {
    bag: bag1,
    title: 'Shopper bags',
  },
]

const Accessories = ({
  open,
  onMouseEnter,
  onMouseLeave,
}: AccessoriesProps) => {
  if (!open) return null;
  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full border bg-white shadow-md"
      >
        <div className="grid grid-cols-8 grid-rows-5 px-5 py-3">
          <div className="col-span-2 row-span-5 border-r pl-5">
            <span className="font-bold text-navigateBg">SHOP BY PRODUCT</span>
            <ul>
              {shopByProduct.map((title, index) => (
                <li
                  className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer"
                  key={index}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 row-span-5 col-start-3 pl-5">
            <div className="flex flex-col gap-2 ">
              <span className="font-bold text-navigateBg">
                SHOP BY JEWELLERY
              </span>
              {ByJewellery.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.img}
                      className="w-10 h-10 rounded-full object-contain"
                      alt=""
                    />
                  </div>
                  <span className="border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
          <div className="flex flex-col gap-2 ">
              <span className="font-bold text-navigateBg">
                SHOP BY BAGS
              </span>
              {ByBags.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.bag}
                      className="w-10 h-10 rounded-full object-contain"
                      alt=""
                    />
                  </div>
                  <span className="border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
            <div className="w-full h-full flex items-center justify-center ">
                <img src={bag5} className="w-[270px] h-[300px] object-contain" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Accessories;
