
import MediaArticle from "./article&media/MediaArticle";
import ArticleBox from "./articleBox/ArticleBox";
import EmailBox from "./emailBox/EmailBox";
import ImageSlider from "./ImageSlider/ImageSlider";
import MiddleText from "./middleText/MiddleText";
import Shop from "./shop/Shop";

const Main: React.FC = () => {
	return (
	<main>
		<ImageSlider />
		<MiddleText />
		<MediaArticle />
		<Shop />
		<ArticleBox />
		<EmailBox />
	</main>
	)
}

export default Main
