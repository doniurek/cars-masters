import {FaFacebookSquare, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-[#F4F4EF]'>
      <div>
        <h1 className="w-full text-3xl font-bold text-[#A01D26]">Cars Masters</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad, itaque iusto impedit adipisci vel debitis aut obcaecati consequatur sint illo laboriosam culpa mollitia quibusdam.</p>
        <div className='flex md:justify-between justify-evenly md:w-[30%] my-4'>
          <FaFacebookSquare size={30} />
          <FaInstagram  size={30} />
          <FaLinkedinIn  size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-evenly mt-6'>
        <div>
          <h3 className='font-semibold pb-4'>Top Quality</h3>
          <p>We are certified by the Automobile Garage Association</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Quos architecto excepturi a nemo mollitia repellat!</p>
        </div>
        <div>
          <h3 className='font-semibold pb-4'>Contact Us</h3>
          <p>229 Park Ave</p>
          <p>Twin Falls ID 83301</p>
        </div>
      </div>
      
    </div>
  )
}
export default Footer