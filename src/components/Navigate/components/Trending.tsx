import img1 from '@/assets/T-shirt/img1.jpg'
import img2 from '@/assets/T-shirt/img2.jpg'
import img3 from '@/assets/T-shirt/img3.jpg'
import img4 from '@/assets/T-shirt/img4.jpg'
type TrendingProps = {
    open: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

const topSearched = [
  {
    img: img1,
    title: 'Gorpcore',
  },
  {
    img: img2,
    title:'Terrace casuals',
  },
  {
    img: img3,
    title: 'Tailoring',
  },
  {
    img: img4,
    title:'Graphic tees',
  }
    
]

const Trending = ({open,onMouseEnter,onMouseLeave}:TrendingProps) => {
    if(!open) return null

  return (
    <>
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full border bg-white shadow-md"
    >
    <div className="grid grid-cols-8 grid-rows-5 px-5 py-3">

        <div className="col-span-2 row-span-5 border-r">
          <div className='flex flex-col gap-2 '>
            <span className="font-bold text-navigateBg inter">TOP-SEARCHED FAVES</span>
           {
              topSearched.map((el,inx) => (
                <div key={inx} className='flex items-center gap-5'>
                    <div className='border w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-500 hover:cursor-pointer'>
                      <img src={el.img} className='w-10 h-10 rounded-full' alt="" />
                    </div>
                  <span className='border-b text-navigateBg hover:text-blue-500 hover:cursor-pointer hover:border-blue-500'>{el.title}</span>
                </div>
              ))
            }
           </div>
        </div>
        
        <div className="col-span-2 row-span-5 col-start-3 border-r pr-5">
            <div className='w-[280px] h-[310px] relative border flex items-center justify-center hover:border-blue-500 cursor-pointer'>
              <img src={img1} className='w-[270px] h-[300px] object-cover' alt="" />
              <span className='absolute bottom-8 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold inter whitespace-nowrap text-xl'>NEW SEASON</span>
            </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-5 border-r pr-5">
            <div className='w-[280px] h-[310px] relative border flex items-center justify-center hover:border-blue-500 cursor-pointer'>
              <img src={img2} className='w-[270px] h-[300px] object-cover' alt="" />
              <span className='absolute bottom-8 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold inter whitespace-nowrap text-xl'>SUMMER STYLEING</span>
            </div>
        </div>

        <div className="col-span-2 row-span-5 col-start-7 border-l pr-5">
            <div className='w-[280px] h-[310px] relative border flex items-center justify-center hover:border-blue-500 cursor-pointer'>
              <img src={img3} className='w-[270px] h-[300px] object-cover' alt="" />
              <span className='absolute bottom-8 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold inter whitespace-nowrap text-xl'>UTILTY EDIT</span>
            </div>
        </div>

    </div>
        
    </div>
    </>
  )
}

export default Trending