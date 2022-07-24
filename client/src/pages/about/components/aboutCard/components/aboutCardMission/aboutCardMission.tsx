import './aboutCardMission.css';
import { IAboutCardMission } from '../../types/aboutCard';

export const AboutCardMission = ({job, company, date} : IAboutCardMission) => {
    return (
        <div className="cardSkill">
            <p className="cardSkillText">{job} - {company} | {date}</p>
        </div>
    )
};