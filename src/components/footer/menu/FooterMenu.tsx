import React from 'react'
import NavItems from '../../header/navitems/NavItems'

const FooterMenu:React.FC = () => {
    return (
        <div className="w-3/6 sm:float-none float-left  sm:mx-auto mt-12 text-spartan font-bold">
            <NavItems />
        </div>
    )
}

export default FooterMenu
