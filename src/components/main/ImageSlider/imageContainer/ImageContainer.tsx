import React from "react";
interface Props {
  data:Array<Type>,
  current:number
  
}
interface Type{
    id: number;
    src: any;
    alt: string;
    text: string;
    firstHead: string;
    secoundHead: string;
}

const ImageContainer: React.FC<Props> = ({data,current}) => {
  return (
  <div className="absolute lg:w-5/6 w-full flex lg:ml-auto rounded-sm overflow-hidden -right-0 shadow-xl	 h80">
        {data.map((item,index)=>{
            return <img src={item.src} alt={item.alt} key={item.id} className={`w-full h-full absolute an ${index ===current ? 'active':'disactive'}`} />
                     
                 
                 
            
        })}
  </div>
  );
};

export default ImageContainer;
