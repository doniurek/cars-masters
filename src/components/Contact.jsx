function Contact() {
  return (
    <div name="contact" className="text-[#F4F4EF]">
      <h2 className="md:text-4xl sm:text-3xl text-l font-bold text-[#ACBEBE] mx-4 mb-4 text-center">Contact us</h2>
      <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-2 gap-8 text-[#F4F4EF] place-items-center">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.596465156124!2d-114.47653369999999!3d42.5426261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aca371e7507ed5%3A0x97564a083e8089ab!2s229%20Park%20Ave%2C%20Twin%20Falls%2C%20ID%2083301%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1689795269699!5m2!1spl!2spl" className="w-full md:h-[400px] aspect-square" style={{border: 0}} loading="lazy"></iframe>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#A01D26]">Car Masters</h2>
          <br />
          <p>229 Park Ave</p>
          <p>Twin Falls ID 83301</p>
          <br />
          <p>12345 678910</p>
          <br />
          <p>carmasters@madeup.com</p>
        </div>

      </div>
    </div>
  )
}
export default Contact