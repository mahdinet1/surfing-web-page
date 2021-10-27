import React,{useState} from 'react'
import SliderButton from './sliderButton/sliderButton'
import { dataImage } from './imagesData'
import ImageContainer from './imageContainer/ImageContainer'
import SliderContent from './SliderContent/SliderContent'

const ImageSlider:React.FC = () => {
    const [currentImg, setcurrentImg] = useState<number>(0)
    const lenghtOfData:number = dataImage.length
    //console.log(lenghtOfData,currentImg)
    const selectedImg:any = dataImage.find(item=>item.id===(currentImg+1))
   
   const nextHandler =()=>{
        if(currentImg >= (lenghtOfData -1)){
            setcurrentImg(0)
        }
        else{
            setcurrentImg(currentImg+1)
        }
        
   }
   setTimeout(()=>{
    nextHandler()
    },10000)
   const prevHandler =()=>{
    if(currentImg <= 0){
        setcurrentImg(lenghtOfData-1)
    }
    else{
        setcurrentImg(currentImg-1)
    }
    
   }
    return (
        <div className=" mt-10 relative h80">
            <ImageContainer data={dataImage} current={currentImg} />
            <SliderButton current={currentImg+1} total={lenghtOfData} next={nextHandler} prev={prevHandler} />
            <SliderContent selectedImg={selectedImg} currentImg={currentImg+1} />
            
        </div>
    )
}

export default ImageSlider
