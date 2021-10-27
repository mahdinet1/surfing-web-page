import React from 'react'

const SliderContent:React.FC<any> = ({selectedImg,currentImg}) => {
    return (
        <div className={`absolute banner-pos ${selectedImg.id ===currentImg ? 'active':'disactive'}`}>
                <p  className="text-my2color">{selectedImg.firstHead}</p>
                <h2 className="text-spartan sm:text-6xl text-4xl font-bold mt-2	">{selectedImg.secoundHead}</h2>
                <p className="w29vw mt-3 lg:text-gray-400 md:text-gray-700 text-gray-900">{selectedImg.text}</p>
        </div>
    )
}

export default SliderContent
