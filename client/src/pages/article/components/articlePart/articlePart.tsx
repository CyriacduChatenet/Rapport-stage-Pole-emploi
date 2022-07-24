import './articlePart.css';
import { IArticlePart } from './types/articlePart';

export const ArticlePart = ({title, subtitle, content, image_middle_src, first_image_src, second_image_src, image_middle_right_src} : IArticlePart) => {
    const conditionalTemplate = () => {
        if(first_image_src !== "" || second_image_src !== ""){
            return 'twoImages';
        }
        if(image_middle_right_src !== ""){
            return 'singleImageRight';
        }
        if(image_middle_src !== ""){
            return 'singleImageBottom';
        }

        if(image_middle_src !== "" && image_middle_right_src !== "" && first_image_src !== "" && second_image_src !== ""){
            return 'noImages'
        }
    }
    return (
        <div id="articlePart" className={conditionalTemplate()}>
            <div id="articleContent" className={image_middle_src !== "" ? 'contentLarge' : "o"} style={conditionalTemplate() ==='singleImageBottom' ? {width: '100%'} : {width : "45%"} || conditionalTemplate() === "noImages" ? {width: '100%'} : {width : "45%"}}>
                <h2 className="articlePartTitle">{title}</h2>
                {subtitle !== "" ?  <h3 className="articlePartSubtitle">{subtitle}</h3> : null}
                <p className="articlePartContent">{content}</p>
            </div>
                {first_image_src !== "" && second_image_src !== "" ? <aside className="articleImages">
                    <div className="articleImageFirst" style={{backgroundImage : `url(${first_image_src})`}}></div>
                    <div className="articleImageSecond" style={{backgroundImage : `url(${second_image_src})`}}></div>
                </aside> : <></>}
                {image_middle_right_src !== "" ? <aside className="articleImageRight" style={{backgroundImage : `url(${image_middle_right_src})`}}></aside> : <></>}
                {image_middle_src !== "" ? <div className="articleImageBottom" style={{backgroundImage : `url(${image_middle_src})`}}></div> : <></>}
        </div>
    )
};