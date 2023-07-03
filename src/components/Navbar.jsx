import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#F4F4EF]">
      <h1 className="w-full text-3xl font-bold text-[#A01D26]">Cars Masters</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Offer</li>
        <li className="p-4">Opinions</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-[#ACBEBE] bg-[#20232a] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#A01D26] m-4 pt-4">Cars Masters</h1>
        <ul className='p-4 uppercase'>
          <li className="p-4">Home</li>
          <li className="p-4">Offer</li>
          <li className="p-4">Opinions</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar