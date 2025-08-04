import img6 from "@/assets/T-shirt/img6.jpg";
import img7 from "@/assets/T-shirt/img7.jpg";
import img5 from "@/assets/T-shirt/img5.jpg";
import img1 from "@/assets/T-shirt/img1.jpg";
import img3 from "@/assets/T-shirt/img3.jpg";

type NewInProps = {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const newProduct = [
  "View all",
  "Clothing",
  "Shoes",
  "New In: Today",
  "New In: Selling Fast",
  "T-Shirts & Vests",
  "Jeans & Trousers",
  "Accessories",
  "Underwear",
  "Jumpers",
];
const summer = [
  {
    img: img1,
    title: "Summer Essentials",
  },
  {
    img: img3,
    title: "Linen Looks",
  },
  {
    img: img5,
    title: "Summertime Prep",
  },
  {
    img: img7,
    title: "Light Jackets",
  },
  {
    img: img6,
    title: "Denim",
  },
];

const brandsDrops = [
  {
    img: img6,
    brand: "ASOS DESIGN",
  },
  {
    img: img7,
    brand: "adidas",
  },
  {
    img: img3,
    brand: "British Brands",
  },
  {
    img: img1,
    brand: "New Balance",
  },
  {
    img: img7,
    brand: "New Look",
  },
  {
    img: img1,
    brand: "The North Face",
  },
];

const NewIn = ({ open, onMouseEnter, onMouseLeave }: NewInProps) => {
  if (!open) return null;

  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full border bg-white shadow-md"
      >
        <div className="grid grid-cols-8 grid-rows-5 px-5 py-3">

          <div className="col-span-2 row-span-5 border-r">
            <span className="font-bold text-navigateBg">NEW PRODUCT</span>
            {newProduct.map((title, inx) => (
              <ul key={inx}>
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer">
                  {title}
                </li>
              </ul>
            ))}
          </div>

          <div className="col-span-2 row-span-5 col-start-3 border-r pr-5">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-navigateBg">SHOP BY SIZE</span>
              {summer.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.img}
                      className="w-10 h-10 rounded-full"
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

          <div className="col-span-2 row-span-5 col-start-5 border-r pr-5">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-navigateBg">SHOP BY SIZE</span>
              {brandsDrops.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.img}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </div>
                  <span className="border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500">
                    {el.brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 row-span-5 col-start-7 w-full h-full">
            <span className="font-bold text-navigateBg">NEW EDITS</span>
            <div className="w-full h-full flex items-center justify-center relative">
              <img src={img7} className="w-72 h-[300px] object-cover" alt="" />
              <span className="absolute text-2xl font-bol text-white inter bottom-8">SUMMER SHOP</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewIn;
