/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {CgTwitter} from 'react-icons/cg'
import {BsTwitter} from 'react-icons/bs'
import {BsVimeo} from 'react-icons/bs'
const SocialMedia:React.FC = () => {
    return (
        <div className="sm:flex justify-center  mr-16  w-1/5 sm:mx-auto sm:float-none float-right sm:mt-8 mt-12 text-gray-300 text-xl sm:mb-16">
            <div className="ml-8 cursor-pointer sm:mb-0 mb-10"><a  href="" className="hover:text-gray-700"><CgTwitter /></a></div>
            <div className="ml-8 cursor-pointer sm:mb-0 mb-10"><a href="" className="hover:text-gray-700"><BsTwitter /></a></div>
            <div className="ml-8 cursor-pointer sm:mb-0  "><a href="" className="hover:text-gray-700"><BsVimeo /></a></div>
        </div>
    )
}

export default SocialMedia
