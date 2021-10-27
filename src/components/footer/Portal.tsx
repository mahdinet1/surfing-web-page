import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

const PortalFooter:React.FC =()=>{
 return ReactDOM.createPortal(<Footer />,document.getElementById('footer'))
}
export default PortalFooter