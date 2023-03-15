import React, {useState} from 'react'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
  return (
    <div className='fixed right-[8%] bottom-[48%] border-[#777777] rounded-full border w-[40px] h-[40px] justify-center items-center hidden cursor-pointer transition-all ease-out duration-1000'
          onClick={scrollToTop}
          style={{display: visible ? 'flex' : 'none'}}
        >
            <img
              className='w-[20px]'
              src='/assets/column-page/grid-item/icon-arrow.svg'
              alt=""
            />
        </div>
  )
}
