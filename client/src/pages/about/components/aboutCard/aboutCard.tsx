import './aboutCard.css';
import { IAboutCardSkill } from './types/aboutCard';

export const AboutCard = ({name} : IAboutCardSkill) => {
    return (
        <div className="cardSkill">
            <p className="aboutCardSkill">{name}</p>
        </div>
    )
};