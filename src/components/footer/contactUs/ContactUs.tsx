import React from 'react'
import image from '../../../assets/images/contactUs.jpg'
const ContactUs:React.FC = () => {
    return (
        <div className="sm:flex">
            <div className="sm:w-3/6 w-full">
                <img src={image} alt="contact-us" className="w-full" />
            </div>
            <div className="sm:w-3/6 w-full sm:mt-0 mt-8 lg:py-16 lg:px-12 md:px-8 md:py-6 px-4 ">
                <div>
                    <p className="text-spartan text-gray-300 tracking-lg font-semibold text-sm">OUR CAMP</p>
                </div>
                <div className="pl-12 mt-12 text-spartan md:text-2xl text-xl font-semibold">
                    <h3 style={{color:'#333'}}>
                    CA 91932, USA<br />
                    Imperial Beach<br/>
                    560 Silver Strand Blvd
                    </h3>
                </div>
                <div className="mt-12 text-xs text-custom-blue text-spartan">
                    <a href="#" className="tracking-lg border-b-2 pb-3 border-blue-200 hover:border-blue-300 hover:text-blue-400">GET IN TOUCH</a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
