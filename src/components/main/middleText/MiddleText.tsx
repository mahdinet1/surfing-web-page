import React from 'react'
import style from './middletext.module.css'
const MiddleText:React.FC = () => {
    return (
        <div className={`flex flex-col sm:w-3/6 w-5/6 mx-auto text-spartan mt-24 ${style.container}`}>
            <h4 className="text-center text-2xl text-gray-500">surfing is the most bissful experience you can have on this planet,a taste of heaven</h4>
            <p className="text-center text-sm">JOHN MCCARTTHY</p>
        </div>
    )
}

export default MiddleText
