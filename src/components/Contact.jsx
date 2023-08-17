import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import db from "../firebase.config.js"
import { toast } from 'react-toastify'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    car: '',
    message: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp()
    }

    await addDoc(collection(db, 'messages'), formDataCopy)

    document.getElementById("contact-form").reset()

    toast.success('Message sent', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

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
      <form id="contact-form" action="" onSubmit={onSubmit} className="flex flex-col max-w-[600px] mx-auto text-[#20232a]">
        <h2 className="text-[#ACBEBE] font-bold text-xl mx-2 py-4">Leave us a message</h2>
        <input className="mb-4 mx-2 p-2 bg-[#F4F4FE] rounded" type="text" placeholder="Name" name="name" id="name" onChange={onChange} required/>
        <input className="mb-4 mx-2 p-2 bg-[#F4F4FE] rounded" type="text" placeholder="Email" name="email" id="email" onChange={onChange} required/>
        <input className="mb-4 mx-2 p-2 bg-[#F4F4FE] rounded" type="text" placeholder="Car brand and model" name="car" id="car" onChange={onChange} required/>
        <textarea className="mb-4 mx-2 p-2 bg-[#F4F4FE] rounded" rows="10" placeholder="Message" name="message" id="message" onChange={onChange} required/>
        <button className="border border- rounded font-bold text-[#F4F4FE] hover:bg-[#ACBEBE] hover:text-[#20232a] mx-auto py-2 px-8" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Contact