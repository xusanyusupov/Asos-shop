import hariCare from "@/assets/KosmetikaAksessuarlari/hairCare.jpg";
import parfum from "@/assets/KosmetikaAksessuarlari/parfum.jpg";
import shaving from "@/assets/KosmetikaAksessuarlari/Shaving.jpg";

type GroomingProps = {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const byProduct = [
  "Top Rated Face + Body",
  "Up to 30% off Face + Body brands",
  "New in",
  "View all",
  "Body care",
  "Hair care",
  "Makeup",
  "Shaving & Grooming",
  "Skin care",
  "Suncare & Tanning",
  "Tools & Accessories",
];
const byBrand = [
  "Shop By Brand",
  "Barber Pro",
  "Bulldog",
  "Cetaphil",
  "Hanz de Fuko",
  "Malin + Goetz",
  "Murdock London",
  "Olaplex",
  "Revolution Man",
  "Revolution Skincare",
  "The Inkey List",
  "The Ordinary",
  "Uppercut Deluxe",
  "Wahl",
];

const Grooming = ({ open, onMouseEnter, onMouseLeave }: GroomingProps) => {
  if (!open) return null;
  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full border bg-white shadow-md"
      >
        <div className="grid grid-cols-8 grid-rows-5 px-5 py-3">

          <div className="col-span-2 row-span-5">
            <span className="font-bold text-navigateBg">SHOP BY PRODUCT</span>
            <ul>
              {byProduct.map((title, index) => (
                <li
                  className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer"
                  key={index}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 row-span-5 col-start-3 border-l pl-5">
            <span className="font-bold text-navigateBg">SHOP BY BRAND</span>
            <ul>
              {byBrand.map((title, index) => (
                <li
                  className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer"
                  key={index}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
            <div className="flex items-center justify-center w-full">
              <div className="w-[270px] h-[140px] overflow-hidden rounded-md relative">
                <img
                  className="object-cover w-full h-full"
                  src={hariCare}
                  alt=""
                />
                <div className="bg-modalBg w-full h-full absolute top-0 left-0">
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap">
                    Hair Care
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
            <div className="flex flex-col items-center gap-3">
              <div className="w-[270px] h-[140px] overflow-hidden rounded-md relative">
                <img
                  className="object-cover w-full h-full"
                  src={parfum}
                  alt=""
                />
                <div className="bg-modalBg w-full h-full absolute top-0 left-0">
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap">
                    FRAGNAGES
                  </span>
                </div>
              </div>
              <div className="w-[270px] h-[140px] overflow-hidden rounded-md relative border">
                <img
                  className="object-cover w-full h-full"
                  src={shaving}
                  alt=""
                />
                <div className="bg-modalBg w-full h-full absolute top-0 left-0">
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap">
                    SHAVING & GROOMING
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Grooming;
