import adidas from  '@/assets/png-s/adidas logo.png'
import gucci from  '@/assets/png-s/gucci.png'
import prada from  '@/assets/png-s/prada.png'
import lacoste from  '@/assets/png-s/lacoste.png'
import nike from  '@/assets/png-s/nike.png'



type ShoesProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}
const piece = [
  'Top Rated Shoes',
  'Selling Fast',
  'View all',
  'New in',
  'Trainers',
  'Sandals',
  'Sliders & Flip flops',
  'Boots',
  'Loafers',
  'Running Trainers',
  'Slippers',
  'Socks',
]
const shopByBrand = [
  {
    img: adidas,
    title: 'Adidas',
  },
  {
    img: lacoste,
    title: 'Lacoste',
  },
  {
    img: gucci,
    title: 'Gucci',
  },
  {
    img: prada,
    title: 'Prada',
  },
  {
    img: nike,
    title: 'Nike',
  },
]
const shopByTrainerStyle = [
  'adidas Originals Campus',
  'adidas Originals Gazelle',
  'New Balance 530',
  'New Balance 550',
  'New Balance 574',
  'ON Cloudnova',
  'ON Cloudmonster',
  'Reebok Club Classic',
  'Vans Old Skool',
  'adidas Originals Stan Smith',
]

const Shoes = ({open,onMouseEnter,onMouseLeave}:ShoesProps) => {
    if(!open) return null 

        
  return (
    <>
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full border bg-white shadow-md"
    >
    <div className="grid grid-cols-8 grid-rows-5 gap-4 px-5 py-3">

        <div className="col-span-2 row-span-5">
          <span className='font-bold text-navigateBg'>SHOP BY PRODUCT</span>
            <ul>
              {piece.map((title, index) => (
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer" key={index}>{title}</li>
              ))}
            </ul>
        </div>

        <div className="col-span-2 row-span-5 col-start-3 border-l pl-5">
        <div className='flex flex-col gap-5'>
            <span className='font-bold text-navigateBg'>SHOP BY BRAND</span>
           {
              shopByBrand.map((el,inx) => (
                <div key={inx} className='flex items-center gap-5'>
                    <div className='border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer'>
                      <img src={el.img} className='w-10 h-10 rounded-full object-contain' alt="" />
                    </div>
                  <span className='border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500'>{el.title}</span>
                </div>
              ))
            }
           </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
        <span className='font-bold text-navigateBg'>SHOP BY PRODUCT</span>
            <ul>
              {shopByTrainerStyle.map((title, index) => (
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer" key={index}>{title}</li>
              ))}
            </ul>
        </div>  

        <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
          <div className='flex flex-col w-full gap-3'>
                <div className="flex items-center w-full justify-between bg-modalBg px-5 rounded-md">
                  <span className='whitespace-nowrap font-bold text-white '>BLACK TRAINERS</span>
                  <img className='w-28 h-28 object-contain' src={adidas} alt="" />
                </div>
                <div className="flex items-center w-full justify-between bg-modalBg px-5 rounded-md">
                  <span className='whitespace-nowrap font-bold text-white '>CHELSA BOOTS</span>
                  <img className='w-28 h-28 object-contain' src={nike} alt="" />
                </div>

                <div className="flex items-center w-full justify-between bg-modalBg px-5 rounded-md">
                  <span className='whitespace-nowrap font-bold text-white '>RETRO TRAINERS</span>
                  <img className='w-28 h-28 object-contain' src={gucci} alt="" />
                </div>
          </div>
        </div>  

    </div>
    </div>
    </>
  )
}

export default Shoes