import React from 'react'
import ArticleSummery from '../../articleSummery/ArticleSummery'
import image1 from '../../../assets/images/article2.jpg'
import image2 from '../../../assets/images/article3.jpg'
const ArticleBox:React.FC = () => {
    return (
        <>
         <ArticleSummery  image={image2} number="01" heading="Point Break" text="By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water." imageLeft={false} large={true} /> 
           <ArticleSummery  image={image1} number="02" heading="Point Break" text="By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water." imageLeft={true} large={false} /> 
          
        </>
    )
}

export default ArticleBox
