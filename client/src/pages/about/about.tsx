import "./about.css";
import { Layout } from "../../common/components/layout/layout";
import { useState } from "react";
import { IAbout } from "./types/about";
import { UseFetch } from "../../common/hooks/useFetch";
import { AboutCard } from "./components/aboutCard/aboutCard";
import { AboutCardMission } from "./components/aboutCard/components/aboutCardMission/aboutCardMission";
import {
  IAboutCardSkill,
  IAboutCardMission,
} from "./components/aboutCard/types/aboutCard";
import { IStack } from "../../common/components/stack/types/stack";
import { StackBlock } from "../../common/components/stack/stack";

export const AboutPage = () => {
  const [data, setData] = useState<IAbout[]>([]);

  UseFetch(data, setData, "/api/about");
  return (
    <Layout>
      <>
        {data.map((about: IAbout) => (
          <div id="about" key={about._id}>
            <section className="aboutHeader">
              <h1 className="aboutTitle">{about.title}</h1>
              <div className="aboutImagePreview"></div>
            </section>
            <h2 className="aboutSubtitle">{about.location}</h2>
            <section className="aboutStory">
              <p className="aboutContent">{about.body.content}</p>
              <div className="aboutProfilePicture"></div>
            </section>
            <section className="aboutSkills">
              <h3 className="aboutSubtitleSecond">Skills</h3>
              {about.skills.map((skill: IAboutCardSkill) => (
                <AboutCard name={skill.name} />
              ))}
            </section>
            <section className="aboutMissions">
              <h3 className="aboutSubtitleSecond">Last missions</h3>
              {about.missions.map((mission: IAboutCardMission) => (
                <AboutCardMission
                  job={mission.job}
                  company={mission.company}
                  date={mission.date}
                />
              ))}
            </section>
            <section className="aboutStack">
              <h3 className="aboutSubtitleSecond">Stack</h3>
              <ul className="stackList">
                {about.stack.stack.map((tools: IStack) => (
                  <StackBlock
                    key={tools._id}
                    stack_name={tools.stack_name}
                    technologies={tools.technologies}
                  />
                ))}
              </ul>
            </section>
          </div>
        ))}
      </>
    </Layout>
  );
};
