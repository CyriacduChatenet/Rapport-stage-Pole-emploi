import './thinks.css';
import { IThinks, IThinksList } from './types/thinks';

export const ThinksBlock = ({thinks_content, thinks_people_List} : IThinks) => {
    return (
        <div id="thinks">
            <h4 className="thinksTitle">Remerciements</h4>
            <p className="thinksContent">{thinks_content}</p>
            <ul className="thinksList">
                {thinks_people_List.map((people : IThinksList) => <li className="thinksPeople">{people.name} : {people.job}</li>)}
            </ul>
        </div>
    )
}