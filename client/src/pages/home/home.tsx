import { Layout } from "../../common/components/layout/layout";
import { ArticleCard } from "./components/articleCard/articleCard";
import { Herobanner } from "./components/herobanner/herobanner";
import "./home.css";

export const HomePage = () => {
  return (
    <Layout>
      <div id="home">
        <Herobanner />
        <section className="articlesList">
          <div className="articlesListHeader">
            <ArticleCard
              title=""
              description=""
              date=""
              image_src=""
              cardSize="large"
            />
          </div>
          <div className="otherArticles">
            <ArticleCard
              title=""
              description=""
              date=""
              image_src=""
              cardSize="normal"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};
