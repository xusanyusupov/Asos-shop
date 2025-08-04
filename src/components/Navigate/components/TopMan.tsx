import rasm1 from '@/assets/T-shirt/img1.jpg'
import rasm2 from '@/assets/T-shirt/img2.jpg'
import rasm3 from '@/assets/T-shirt/img3.jpg'
import rasm7 from '@/assets/T-shirt/img7.jpg'


type TopManProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

const byEdit = [
  {
    img: rasm1,
    title: 'Last of Summer',
  },
  {
    img: rasm2,
    title: 'Transitional Layering',
  },
  {
    img: rasm3,
    title: 'Essentials',
  },
  {
    img: rasm7,
    title: 'Occasionwear',
  }
]

const byProduct = [
  'New in',
  'View all',
  'Suits & Tailoring',
  'T-Shirts & Vests',
  'Shirts',
  'Shorts',
  'Trousers & Chinos',
  'Jeans',
  'Jackets & Coats',
  'Jumpers & Cardigans',
  'Hoodies & Sweatshirts',
]

const TopMan = ({open,onMouseEnter,onMouseLeave}:TopManProps) => {
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
          <span className='font-bold text-navigateBg'>SHOP BY PRODUCT</span>
          <ul>
              {byProduct.map((title, index) => (
                <li className="pt-3 px-1 inter whitespace-nowrap text-[14px] text-navigateBg hover:text-blue-500 cursor-pointer" key={index}>{title}</li>
              ))}
          </ul>
        </div>
        
        <div className="col-span-2 row-span-5 col-start-3 border-l pl-5">
        <span className='font-bold text-navigateBg'>SHOP BY PRICE</span>
          <div className='grid grid-cols-2 place-items-center'>
              {
                byEdit.map((el,inx) => (
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

        <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
            <div className="w-full h-full flex items-center justify-center relative">
              <img src={rasm7} className="w-72 h-[350px] object-cover" alt="" />
              <span className="absolute text-2xl font-bol text-white inter bottom-16">SUMMER SHOP</span>
            </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
            <div className="w-full h-full flex items-center justify-center relative">
              <img src={rasm7} className="w-72 h-[350px] object-cover" alt="" />
              <span className="absolute text-2xl font-bol text-white inter bottom-16">SUMMER SHOP</span>
            </div>
        </div>
        
    </div>
        
    </div>
    </>
  )
}

export default TopMan



