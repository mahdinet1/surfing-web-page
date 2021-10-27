import React from 'react'
import { VscPlay } from 'react-icons/vsc'

const VideoArticle:React.FC<any> = ({videoUrl}) => {
    
    const playHandler =()=>{
        const video:HTMLMediaElement|any = document.getElementById('surfing-video')
        const play:HTMLElement = document.getElementById('play')
        if(video){
            video.play()
            play.style.display="none"
            video.setAttribute('controls','')
        }


    }
    const endHandler =()=>{
         const video:HTMLMediaElement|any = document.getElementById('surfing-video')
         if(video){
             video.currentTime =0
         }
        const play:HTMLElement = document.getElementById('play')
        play.style.display="block"

    }
    return (
        <div className="lg:absolute h-5/6  right-24 top-8 ">
            <div className="relative lg:w-full sm:w-3/6 w-5/6 h-full lg:mx-0 mx-auto">
                <video   className="w-full h-full" id="surfing-video" onEnded={endHandler} playsInline>
                    <source src={videoUrl} type="video/mp4" />
                </video>
                 <div className="w-12 h-12 rounded-full absolute bg-blue-400 cursor-pointer top-2/4 left-2/4" id="play">
                     <div className="absolute top-1/3 left-1/3" onClick={playHandler}>
                         <VscPlay />
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default VideoArticle
