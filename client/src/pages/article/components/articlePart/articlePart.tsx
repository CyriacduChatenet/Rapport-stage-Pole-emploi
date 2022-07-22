import './articlePart.css';
import { ArticleBlock } from './types/articlePart';

export const ArticlePart = ({title, subtitle, content, image_middle_src, image_first_src, image_second_src, image_middle_right_src} : ArticleBlock) => {
    const conditionalTemplate = () => {
        if(image_first_src !== "" || image_second_src !== ""){
            return 'twoImages';
        }
        if(image_middle_right_src !== ""){
            return 'singleImageRight';
        }
        if(image_middle_src !== ""){
            return 'singleImageBottom';
        }
    }
    return (
        <div id="articlePart" className={conditionalTemplate()}>
            <div id="articleContent" className={image_middle_src !== "" ? 'contentLarge' : "o"}>
                <h2 className="articlePartTitle">{title}</h2>
                {subtitle !== "" ?  <h3 className="articlePartSubtitle">{subtitle}</h3> : null}
                <p className="articlePartContent">{content}</p>
            </div>
                {image_first_src !== "" && image_second_src !== "" ? <aside className="articleImages">
                    <div className="articleImageFirst" style={{backgroundImage : `url(${image_first_src})`}}></div>
                    <div className="articleImageSecond" style={{backgroundImage : `url(${image_second_src})`}}></div>
                </aside> : null}
                {image_middle_right_src !== "" ? <aside className="articleImageRight" style={{backgroundImage : `url(${image_middle_right_src})`}}></aside> : null}
                {image_middle_src !== "" ? <div className="articleImageBottom" style={{backgroundImage : `url(${image_middle_src})`}}></div> : null}
        </div>
    )
};