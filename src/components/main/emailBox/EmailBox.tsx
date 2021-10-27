import React, { useState } from 'react'
import InputBox from '../../inputBox/InputBox'
import { AiOutlineRight } from 'react-icons/ai'
const EmailBox:React.FC = () => {
    const [val, setVal] = useState('')
    const changeHandler = (event)=>{
        setVal(event.target.value)
    }
    return (
        <div className="mt-16">
           <div className="w-0.5 h-20 bg-mycolor mx-auto mb-16"></div>
           <div className="flex flex-col items-center text-spartan md:w-3/6 w-5/6 mx-auto">
                <h2 className="text-5xl mb-4 font-bold text-gray-700 whitespace-nowrap	">Join The Club</h2>
                <p className="text-center text-gray-400">By better understanding the various aspects of surfing, you will improve faster 
                    and have more fun in the water.
                </p>
                <div className="w-full flex justify-center ">
                    <InputBox type="email" plcHolder="your e-mail" value={val} change={changeHandler} />
                    <button className=" text-white h-9 w-6 flex justify-center items-center mt-5 cursor-pointer" style={{background:'#5da8ef'}}><AiOutlineRight /></button>
                </div>
           </div>
        </div>
    )
}

export default EmailBox
