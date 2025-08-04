import img1 from '@/assets/T-shirt/img1.jpg'
import img2 from '@/assets/T-shirt/img2.jpg'
import img4 from '@/assets/T-shirt/img4.jpg'
import img6 from '@/assets/T-shirt/img6.jpg'
import img7 from '@/assets/T-shirt/img7.jpg'
import img8 from '@/assets/T-shirt/img8.jpg'

type SaleProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}
const piece = [
  'SALE Selling fast',
  'SALE Last chance to buy',
  'SALE View all',
  'SALE T-Shirts & Vests',
  'SALE Shoes & Trainers',
  'SALE Shirts',
  'SALE Shorts',
  'SALE Swimwear',
  'SALE Trousers & Chinos',
  'SALE Suits & Tailoring',
  'SALE Trainers',
  'SALE Accessories',
]
const nextPiece = [
  'SALE Bags',
  'SALE Hoodies & Sweatshirts',
  'SALE Jackets & Coats',
  'SALE Jeans',
  'SALE Jewellery & Watches',
  'SALE Jumpers & Cardigans',
  'SALE Loungewear',
  'SALE Polo shirts',
  'SALE Sunglasses',
  'SALE Underwear & Socks',
]
const shopPrice = [
  {
    img:img1, 
    title: 'Sale under $10'
  },
  {
    img: img2,
    title: 'Sale under 15$'
  },
  {
    img: img4,
    title: 'Sale under $30'
  }
]
const shopSize = [
  {
    img: img1,
    size: 'Size XS',
  },
  {
    img: img2,
    size: 'Size S'
  },
  {
    img: img4,
    size: 'Size M',
  },
  {
    img: img6,
    size: 'Size L'
  },
  {
    img: img8,
    size: 'Size Xl',
  },
  {
    img: img7,
    size: 'Size XXL'
  },
]

const Sale = ({open,onMouseEnter,onMouseLeave}:SaleProps) => {
    if(!open) return null

  return (
    <>
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full  border bg-white shadow-md "
    >
    <div className="grid grid-cols-7 grid-rows-5 gap-4 px-5 py-3">

        <div className="col-span-3 row-span-5 border-r">
          <span className='font-bold text-navigateBg'>SHOP BY PRODUCT</span>
          <div className='grid grid-cols-2'>
            <ul>
              {piece.map((title, index) => (
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer" key={index}>{title}</li>
              ))}
            </ul>
            <ul>
              {nextPiece.map((title, index) => (
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer" key={index}>{title}</li>
              ))}
            </ul>  
          </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-4">
          <span className='font-bold text-navigateBg'>SHOP BY PRICE</span>
          <div className='grid grid-cols-2 place-items-center'>
              {
                shopPrice.map((el,inx) => (
                  <div key={inx} className='flex flex-col items-center my-3 hover:cursor-pointer'>
                  <div className='border rounded-full w-[100px] h-[100px] flex items-center justify-center hover:border-blue-500'>
                    <img src={el.img} className='w-[90px] h-[90px] rounded-full' alt="" />
                  </div>
                  <span className='text-navigateBg inter text-sm hover:text-blue-500'>{el.title}</span>
                </div>
                ))
              }
          </div>
        </div>
        
        <div className="col-span-2 row-span-5 col-start-6 border-l pl-5">
           <div className='flex flex-col gap-2 '>
            <span className='font-bold text-navigateBg'>SHOP BY SIZE</span>
           {
              shopSize.map((el,inx) => (
                <div key={inx} className='flex items-center gap-5'>
                    <div className='border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer'>
                      <img src={el.img} className='w-10 h-10 rounded-full' alt="" />
                    </div>
                  <span className='border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500'>{el.size}</span>
                </div>
              ))
            }
           </div>
        </div>  

    </div>
    </div>
    </>
  )
}

export default Sale