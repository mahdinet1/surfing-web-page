import React from 'react'
import StaticArticle from './staticArticle/StaticArticle'
//import VideoArticle from './videoArticle/VideoArticle'
import articleImage from '../../../assets/images/article.jpg'
import video from '../../../assets/videos/video1.mp4'
const VideoArticle = React.lazy(()=>import('./videoArticle/VideoArticle'))

const MediaArticle:React.FC = () => {
    return (
        <div className="lg:flex lg:relative lg:mt-40 sm:mt-48 mt-56">
            <StaticArticle imgUrl={articleImage} url="/" />
            <React.Suspense fallback={<p>loading...</p>}>
            <VideoArticle videoUrl={video} />
            </React.Suspense>
        </div>
    )
}

export default MediaArticle

