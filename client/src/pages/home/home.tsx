import { Layout } from "../../common/layout/layout";
import { Herobanner } from "./components/herobanner/herobanner";
import "./home.css";

export const HomePage = () => {
  return (
    <Layout>
      <div id="home">
        <Herobanner />
        <section className="articlesList">
          <div className="articleCardLarge"></div>
          <div className="otherArticles">
            <div className="articleCard"></div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
