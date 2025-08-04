import img6 from '@/assets/T-shirt/img6.jpg'
import img7 from '@/assets/T-shirt/img7.jpg'
type ClothingProps = {
    open: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

  const piece = [
    'Top Rated Clothing',
    'New in',
    'T-Shirts & Vests',
    'Shirts',
    'Co-ords',
    'Shorts',
    'Swimwear',
    'Suits & Tailoring',
    'Activewear',
    'Cargo Trousers',
    'Hoodies & Sweatshirts',
    'Jackets & Coats',
  ]

  const nextPiece = [
    'Jeans',
    'Joggers',
    'Jumpers & Cardigans',
    'Last chance to buy',
    'Loungewear',
    'Multipacks',
    'Polo shirts',
    'Premium',
    'Socks',
    'Tracksuits',
    'Trousers & Chinos',
    'Underwear',
  ]

  const shopByBodyFit = [
    {
      img: img6,
      title: 'Plus Size'
    },
    {
      img: img7,
      title: 'Tall',
    }
  ]

  const shopByEdit = [
    {
      img: img6,
      title: 'Holiday',
    },
    {
      img: img7,
      title: 'Basics',
    },
    {
      img: img6,
      title: 'Workwear',
    },
    {
      img: img7,
      title: 'Occasionwear',
    },
    {
      img: img6,
      title: 'Summer styles',
    },
  ]
  
  const Clothing = ({ open, onMouseEnter, onMouseLeave }: ClothingProps) => {
    if (!open) return null;
  
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full border bg-white shadow-md"
      >

  <div className="grid grid-cols-7 grid-rows-5 px-5 py-3">
        <div className="col-span-3 row-span-5 border-r pr-5">
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
          <span className='font-bold text-navigateBg'>SHOP BY BODY FIT</span>
          <div className='grid grid-cols-2 place-items-center'>
              {
                shopByBodyFit.map((el,inx) => (
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
            <span className='font-bold text-navigateBg'>SHOP BY EDIT</span>
           {
              shopByEdit.map((el,inx) => (
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
    </div>

      </div>
    );
  };
  
  export default Clothing;
  




