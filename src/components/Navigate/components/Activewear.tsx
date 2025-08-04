import img1 from '@/assets/T-shirt/img1.jpg'
import img2 from '@/assets/T-shirt/img2.jpg'
import img3 from '@/assets/T-shirt/img3.jpg'
import img4 from '@/assets/T-shirt/img4.jpg'

import runningPc from '@/assets/runningPc.jpeg'
import runningPc2 from '@/assets/runningPc2.jpeg'

type ActivewearProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

const byProduct = [
  'View all',
  'New In',
  'Trainers',
  'Tops',
  'Joggers',
  'Shorts',
  'Jackets',
  'Hoodies & Sweatshirts',
  'Trousers & Tights',
  'Accessories',
]
const byActivity = [
  {
    img: img4,
    name: 'Running',
  },
  {
    img: img2,
    name: 'Gym & Training',
  },
  {
    img: img3,
    name: 'Outdoors',
  },
  {
    img: img1,
    name: 'Football',
  },
]

const Activewear = ({open,onMouseEnter,onMouseLeave}:ActivewearProps) => {
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
        <span className='font-bold text-navigateBg'>SHOP BY ACTIVITY</span>
          <div className='grid grid-cols-2 place-items-center'>
              {
                byActivity.map((el,inx) => (
                  <div key={inx} className='flex flex-col items-center my-3 hover:cursor-pointer'>
                  <div className='border rounded-full w-[100px] h-[100px] flex items-center justify-center hover:border-blue-500'>
                    <img src={el.img} className='w-[90px] h-[90px] rounded-full' alt="" />
                  </div>
                  <span className='text-navigateBg inter text-sm hover:text-blue-500'>{el.name}</span>
                </div>
                ))
              }
          </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-5 border-l pl-5">
        <span className="font-bold text-navigateBg">SHOP BY EDIT</span>
          <div className='flex flex-col gap-3 justify-center'>
          <div className='w-[270px] h-[140px] overflow-hidden rounded-md relative'>
            <img className='object-cover w-full h-full' src={runningPc} alt="" />
            <div className='bg-modalBg w-full h-full absolute top-0 left-0'>
              <span className='absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap'>
                High performance trainers
              </span>
            </div>
          </div>

          <div className='w-[270px] h-[140px] overflow-hidden rounded-md relative'>
            <img className='object-cover w-full h-full' src={runningPc2} alt="" />
            <div className='bg-modalBg w-full h-full absolute top-0 left-0'>
              <span className='absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap'>
                Marathon moment
              </span>
            </div>
          </div>
          </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-7 border-l pl-5">
        <span className="font-bold text-navigateBg">SHOP BY EDIT</span>
          <div className='flex flex-col gap-3 justify-center'>
          <div className='w-[270px] h-[140px] overflow-hidden rounded-md relative'>
            <img className='object-cover w-full h-full' src={runningPc2} alt="" />
            <div className='bg-modalBg w-full h-full absolute top-0 left-0'>
              <span className='absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap'>
                4505
              </span>
            </div>
          </div>

          <div className='w-[270px] h-[140px] overflow-hidden rounded-md relative'>
            <img className='object-cover w-full h-full' src={runningPc} alt="" />
            <div className='bg-modalBg w-full h-full absolute top-0 left-0'>
              <span className='absolute bottom-5 left-1/2 -translate-x-1/2 text-xl font-bold text-white whitespace-nowrap'>
                ADIDAS PERFORMANS
              </span>
            </div>
          </div>
          </div>
        </div>
    </div>
    
    </div>
    </>
  )
}

export default Activewear



 