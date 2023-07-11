import Typed from "react-typed"

function Hero() {
  return (
    <div className="text-white">
      <div className="width-max-[800px] mt-[-96px] h-screen text-center flex flex-col justify-center">
        <p className="text-[#ACBEBE] font-bold p-2">WE WILL PROVIDE YOUR CAR WITH A LONG AND HAPPY LIFE</p>
        <h1 className="text-[#A01D26] md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">Spoil your car</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">We are </p>
          <Typed 
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["reliable", "fast", "honest", "precise", "passionate", "gentle", "caring", "efficient", "up-to-date"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-xl text-md font-bold text-[#ACBEBE] py-4 lg:mx-60 md:mx-20 mx-10">
          Car Masters is an experienced car service. We have grown as a family
           business, with 3 generations working together. We pride ourselves in
           giving all of our customers that personal touch which you would
           expect from a family run business and of course the most competitive
           prices and great availability and service.
        </p>
      </div>
    </div>
  )
}
export default Hero