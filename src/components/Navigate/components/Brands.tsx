import brand1 from '@/assets/brands/nike.avif'
import brand2 from '@/assets/png-s/gucci.png'
import brand3 from '@/assets/png-s/prada.png'
import brand4 from '@/assets/png-s/adidas logo.png'
import brand5 from '@/assets/png-s/gucci.png'
import brand6 from '@/assets/png-s/nike.png'


import img1 from '@/assets/T-shirt/img2.jpg'
import img2 from '@/assets/T-shirt/img3.jpg'
import img3 from '@/assets/T-shirt/img4.jpg'
import img4 from '@/assets/T-shirt/img5.jpg'
import img5 from '@/assets/T-shirt/img6.jpg'
import img6 from '@/assets/T-shirt/img7.jpg'


type BrandsProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

const topBrand = [
  'A-Z of brands',
  'adidas',
  'Calvin Klein',
  'Carhartt WIP',
  'Jack & Jones',
  'New Balance',
  'New Era',
  'On running',
  'Polo Ralph Lauren',
  'The North Face',
]
const discover = [
  {
    img: img1,
    brandName: 'New In',
  },
  {
    img: img2,
    brandName: 'Premium Brands',
  },
  {
    img: img3,
    brandName: 'Outdoor',
  },
  {
    img: img4,
    brandName: 'Streetwear',
  },
  {
    img: img5,
    brandName: 'Trainers',
  },
  {
    img: img6,
    brandName: 'Emerging Brands',
  },
]
const asosBrand = [
  {
    img: brand1,
    brandName: 'View all',
  },
  {
    img: brand2,
    brandName: 'ASOS DESIGN',
  },
  {
    img: brand3,
    brandName: '4505',
  },
  {
    img: brand4,
    brandName: 'Topman',
  },
  {
    img: brand5,
    brandName: 'COLLUSION',
  },
  {
    img: brand3,
    brandName: 'Reclaimed Vintage',
  },
]

const Brands = ({open,onMouseEnter,onMouseLeave}:BrandsProps) => {
    if(!open) return null 

        
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
              {topBrand.map((title, index) => (
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
        <div className="flex flex-col gap-2 ">
              <span className="font-bold text-navigateBg">ASOS BRAND</span>
              {asosBrand.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.img}
                      className="w-10 h-10 rounded-full object-contain"
                      alt=""
                    />
                  </div>
                  <span className="border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500">
                    {el.brandName}
                  </span>
                </div>
              ))}
            </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
        <span className="font-bold text-navigateBg">DISCOVER BRANDS</span>
              {discover.map((el, inx) => (
                <div key={inx} className="flex items-center gap-5">
                  <div className="border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer">
                    <img
                      src={el.img}
                      className="w-10 h-10 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <span className="border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer inter hover:border-blue-500">
                    {el.brandName}
                  </span>
                </div>
              ))}
        </div>

        <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
          <span className="font-bold text-navigateBg">DISCOVER BRANDS</span>

          <div className='w-full '>
            <img className='w-[270px] h-[140px] object-contain' src={brand5} alt="" />
          </div>
          <div className='w-full '>
            <img className='w-[270px] h-[140px] object-contain' src={brand6} alt="" />
          </div>

        </div>
      </div>
    </div>
        
    </>
  )
}

export default Brands